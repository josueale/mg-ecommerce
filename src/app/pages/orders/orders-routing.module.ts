import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { OrderDetailService } from './services/order-detail.service';

import { OrdersComponent } from './orders.component';

const routes: Routes = [

  {
    path: '',
    component: OrdersComponent,
    children: [

      {
        path: ':id',
        resolve: {
          order: OrderDetailService,
        },
        component: OrderDetailComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
