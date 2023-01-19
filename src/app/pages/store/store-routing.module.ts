import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { LandingStoreComponent } from './pages/landing-store/landing-store.component';
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
      // { path: 'search' },
      // { path: 'product/:id' },
      // { path: 'cart' },
      // { path: 'cart/checkout' },
      // { path: 'order/:id' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
