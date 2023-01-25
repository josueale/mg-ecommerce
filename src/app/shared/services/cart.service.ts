import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import API from '../types/api.types';
import { Cart } from '../types/cart.types';

import { environment } from '../../environments/environments';
import { StorageService } from './storage.service';


const initialState: Cart = {
  _id: '',
  products: [],
  total: 0,
  subtotal: 0,
};

type CartOP = Cart | ((prevState: Cart) => Cart);

interface DataValue {
  productId: string
  quantity: number
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() { }

  private http = inject(HttpClient);
  private storageSrv = inject(StorageService);
  private router = inject(Router);

  private context: Cart = initialState;

  get cart() {
    return { ...this.context };
  }

  saveCart(token: string) {
    this.storageSrv.save(token, environment.cartKey)
  }

  setCartContext(newState: CartOP) {
    if (typeof newState === 'function') {
      this.context = newState(this.context);
      return;
    }

    this.context = newState;
  }


  clear() {
    this.context = initialState;
  }

  get(cart: string | null) {
    return this.http
      .get<API<Cart>>(`${environment.api}/api/v1/cart`, {
        // if cart is null, backend will handle it
        headers: {
          cart_id: cart ?? ''
        }
      })
      .pipe(
        tap((res) => {
          this.saveCart(res.value._id)
          this.setCartContext({
            _id: res.value._id,
            products: res.value.products,
            total: res.value.total,
            subtotal: res.value.subtotal
          });
        })
      );
  }


  addProductToCart(data: DataValue) {
    console.log(data);
    this.http.put(
      `${environment.api}/api/v1/cart`,
      {
        product_id: data.productId,
        quantity: data.quantity,
        cart_id: this.cart._id
      }
    ).subscribe((res) => {
      this.init()
    })
  }



  init() {
    console.log('From on init of app-component @ cart service');

    const cart = this.storageSrv.get<string>(environment.cartKey);

    this.get(cart).subscribe();

  }
}
