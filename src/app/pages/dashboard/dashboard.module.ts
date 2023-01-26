import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogosModule } from 'src/app/shared/components/logos/logos.module';
import { DashboardAnalyticsComponent } from './components/dashboard-analytics/dashboard-analytics.component';
import { DashboardAsideComponent } from './components/dashboard-aside/dashboard-aside.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    DashboardAsideComponent,
    DashboardAnalyticsComponent,
    DashboardNavbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LogosModule,
  ]
})
export class DashboardModule { }
