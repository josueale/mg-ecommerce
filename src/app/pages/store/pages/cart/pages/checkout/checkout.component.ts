import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {

  constructor(
    private cartSvc: CartService,

  ) { }


  get cart() {
    return this.cartSvc.cart
  }

  onPlaceOrder(){
    console.log('placed');
  }

}
