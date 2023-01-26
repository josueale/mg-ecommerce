import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';

import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { OrderCustomerComponent } from 'src/app/shared/components/orders/order-customer/order-customer.component';
import { OrderItemComponent } from 'src/app/shared/components/orders/order-item/order-item.component';
import { OrderSummaryComponent } from 'src/app/shared/components/orders/order-summary/order-summary.component';
import { OrdersComponent } from './orders.component';


@NgModule({
  declarations: [
    OrderDetailComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,

    OrderCustomerComponent,
    OrderItemComponent,
    OrderSummaryComponent,

    NavbarModule,
  ]
})
export class OrdersModule { }
