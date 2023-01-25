import { Component, OnInit } from '@angular/core';

import { AuthService } from './shared/services/auth.service';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'mg-ecommerce';
  constructor(
    private authSvc: AuthService,
    private cartSvc: CartService,

  ) {

  }
  ngOnInit() {
    this.authSvc.initApp()
    this.cartSvc.init()
  }
}
