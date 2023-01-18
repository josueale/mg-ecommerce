import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DataServiceService } from './shared/services/data-service.service';

const routes: Routes = [

  {
    path: '',
    resolve: { response: DataServiceService },
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },

  // {
  //   path: 'dashboard',
  // },

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
