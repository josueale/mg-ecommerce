import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataServiceService } from 'src/app/shared/services/data-service.service';

import { LandingStoreComponent } from './pages/landing-store/landing-store.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

import { SearchComponent } from './pages/search/search.component';
import { ProductDetailService } from './services/product-detail.service';
import { StoreComponent } from './store.component';


const routes: Routes = [

  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: '',
        resolve: { response: DataServiceService },
        component: LandingStoreComponent
      },

      {
        path: 'product/:id',
        resolve: {
          detail: ProductDetailService,
        },
        component: ProductDetailComponent
      },

      {
        path: 'search',
        component: SearchComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
