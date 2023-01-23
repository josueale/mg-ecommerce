import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import API from '../types/api.types';
import { Cart } from '../types/cart.types';

import { environment } from '../../environments/environments';
import { StorageService } from './storage.service';


const initialState = {
  _id: '',
  products: [],
  total: 0

};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() { }

  private clientHttp = inject(HttpClient);
  private storageSrv = inject(StorageService);
  private router = inject(Router);

  private context: Cart = initialState;

  get cart() {
    return { ...this.context };
  }

  saveCart(token: string) {
    this.storageSrv.save(token, environment.cartKey)
  }



  setCartContext(
    newState: Cart | ((prevState: Cart) => Cart)
  ) {
    if (typeof newState === 'function') {
      this.context = newState(this.context);
      return;
    }

    this.context = newState;
  }


  clear() {
    this.context = initialState;
    // this.storageSrv.removeUser();
    this.router.navigate(['/']);
  }

  get(cart: string) {
    return this.clientHttp
      .get<API<Cart>>(`${environment.api}/api/v1/cart`, {
        headers: {
          cart_id: cart
        }
      })
      .pipe(
        tap((res) => {
          this.saveCart(res.value._id)
          this.context = {
            _id: res.value._id,
            products: res.value.products,
            total: res.value.total,
          };
        })
      );
  }


  initApp() {
    console.log('From on init of app-component');

    const cart = this.storageSrv.get<string>(environment.cartKey);

  // Solo si no existe se guarda token

    if (!cart) {
      this.setCartContext(initialState);
      return;
    }

    if (cart) {
      this.get(cart).subscribe();
    }
  }
}
