import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderCustomerComponent } from './components/order-customer/order-customer.component';


@NgModule({
  declarations: [
    OrderListComponent,
    OrderComponent,
    OrderItemComponent,
    OrderSummaryComponent,
    OrderCustomerComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
