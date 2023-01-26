import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderComponent } from './pages/order/order.component';

import { OrderCustomerComponent } from '../../../../shared/components/orders/order-customer/order-customer.component';
import { OrderItemComponent } from '../../../../shared/components/orders/order-item/order-item.component';
import { OrderSummaryComponent } from '../../../../shared/components/orders/order-summary/order-summary.component';


@NgModule({
  declarations: [
    OrderListComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    OrderItemComponent,
    OrderSummaryComponent,
    OrderCustomerComponent,
  ]
})
export class OrdersModule { }
