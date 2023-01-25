import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartListComponent } from './pages/cart-list/cart-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: CartListComponent },
  {
    path: 'checkout',
    // canMatch: nose,
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
