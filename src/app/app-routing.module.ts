import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './pages/home/home.module';

import { DataServiceService } from './shared/services/data-service.service';

const routes: Routes = [

  {
    path: 'home',
    resolve: { products: DataServiceService },
    component: HomeModule
  },

  // {
  //   path: 'dashboard',
  // },

  // {
  //   path: 'auth',
  //   loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
