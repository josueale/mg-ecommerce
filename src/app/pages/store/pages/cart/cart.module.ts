import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './pages/cart-list/cart-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    RouterLink,
  ]
})
export class CartModule { }
