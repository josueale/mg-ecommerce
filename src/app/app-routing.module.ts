import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DataServiceService } from './shared/services/data-service.service';

const routes: Routes = [

  {
    path: '',
    resolve: { response: DataServiceService },
    loadChildren: () => import('./pages/store/store.module').then(m => m.StoreModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
