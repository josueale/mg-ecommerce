import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardAnalyticsComponent } from './components/dashboard-analytics/dashboard-analytics.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardAnalyticsComponent },
      { path: 'products', component: DashboardProductsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
