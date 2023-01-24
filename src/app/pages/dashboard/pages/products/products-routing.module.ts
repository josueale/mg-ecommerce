import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  // Only support ['edit', 'view']
  { path: '', component: ProductListComponent },
  { path: 'new', component: ProductListComponent },
  { path: ':action/:id', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
