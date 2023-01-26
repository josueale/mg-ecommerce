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
  shipping: 0,
  subtotal: 0,
};

type CartOP = Cart | ((prevState: Cart) => Cart);

interface DataValue {
  productId?: string
  quantity?: number
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

  deleteCart() {
    this.storageSrv.remove(environment.cartKey)
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
    console.log(cart);
    return this.http
      .get<API<Cart>>(`${environment.api}/api/v1/cart`, {
        // if cart is null, backend will handle it
        headers: {
          cart_id: cart ?? ''
        }
      })
      .pipe(
        tap((res) => {

          const cart = this.storageSrv.get<string>(environment.cartKey);

          if (!cart) {
            this.saveCart(res.value._id)
          }

          this.setCartContext({
            _id: res.value._id,
            products: res.value.products,
            total: res.value.total,
            shipping: res.value.shipping,
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

  incrementProduct(data: DataValue) {
    console.log(data);
    this.http.put(
      `${environment.api}/api/v1/cart`,
      {
        product_id: data?.productId ?? '',
        quantity: 1,
        cart_id: this.cart._id
      }
    ).subscribe((res) => {
      this.init()
    })
  }

  decrementProduct(data: DataValue) {
    console.log(data);
    this.http.put(
      `${environment.api}/api/v1/cart`,
      {
        product_id: data?.productId ?? '',
        quantity: -1,
        cart_id: this.cart._id
      }
    ).subscribe((res) => {
      this.init()
    })
  }

  removeProductFromCart(productId: string) {
    console.log(productId);
    const cart = this.storageSrv.get<string>(environment.cartKey);

    this.http.delete(
      `${environment.api}/api/v1/cart/item/${productId}`,
      {
        headers: {
          cart_id: cart ?? ''
        }
      }
    ).subscribe((res) => {
      this.init()
    })
  }

  // type this
  checkout(data: any) {
    this.http
      .post<API<any>>(`${environment.api}/api/v1/cart/checkout`, {
        cart_id: this.cart._id,
        user_id: data.user_id,
        billing_address: data.billing_address,
      })
      .subscribe((res) => {
        console.log(1231, res);
        this.router.navigate([`/order/${res.value._id}`])
        this.deleteCart()
        this.init()
      })

  }


  init() {
    console.log('From on init of app-component @ cart service');

    const cart = this.storageSrv.get<string>(environment.cartKey);

    console.log('oktne', cart);
    this.get(cart).subscribe();

  }
}
