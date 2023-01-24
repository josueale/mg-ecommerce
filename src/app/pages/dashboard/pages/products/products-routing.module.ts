import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewProductComponent } from './pages/new-product/new-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  // Only support ['edit', 'view']
  { path: '', component: ProductListComponent },
  { path: 'new', component: NewProductComponent },
  { path: ':action/:id', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
