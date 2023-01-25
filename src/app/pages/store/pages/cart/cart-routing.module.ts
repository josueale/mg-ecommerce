import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutGuard } from 'src/app/shared/guards/checkout.guard';
import { CartListComponent } from './pages/cart-list/cart-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NeedsAuthComponent } from './pages/needs-auth/needs-auth.component';

const routes: Routes = [
  { path: '', component: CartListComponent },
  {
    path: 'checkout',
    canMatch: [CheckoutGuard],
    canActivate: [CheckoutGuard],
    component: CheckoutComponent
  },
  {
    path:'needs-auth',
    component: NeedsAuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
