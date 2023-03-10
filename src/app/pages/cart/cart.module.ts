import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CartRoutingModule } from './cart-routing.module';

import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { CartComponent } from './cart.component';
import { CartListComponent } from './pages/cart-list/cart-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NeedsAuthComponent } from './pages/needs-auth/needs-auth.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    CartListComponent,
    NeedsAuthComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    NavbarModule,
  ]
})
export class CartModule { }
