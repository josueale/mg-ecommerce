import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {

  constructor(
    private cartSrv: CartService,
  ) { }


  get cart() {
    return this.cartSrv.cart
  }

}
