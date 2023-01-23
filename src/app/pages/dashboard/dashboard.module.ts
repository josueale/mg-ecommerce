import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogosModule } from 'src/app/shared/components/logos/logos.module';
import { DashboardAnalyticsComponent } from './components/dashboard-analytics/dashboard-analytics.component';
import { DashboardAsideComponent } from './components/dashboard-aside/dashboard-aside.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { DashboardProductsComponent } from './pages/products/products.component';
import { ProductListComponent } from './pages/products/pages/product-list/product-list.component';
import { ProductListItemComponent } from './pages/products/pages/product-list/components/product-list-item/product-list-item.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAsideComponent,
    DashboardAnalyticsComponent,
    AnalyticsComponent,
    DashboardProductsComponent,
    DashboardNavbarComponent,
    ProductListComponent,
    ProductListItemComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LogosModule,
  ]
})
export class DashboardModule { }
