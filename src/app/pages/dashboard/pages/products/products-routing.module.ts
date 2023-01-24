import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductActionComponent } from './pages/product-action/product-action.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  // Only support ['edit', 'view']
  { path: '', component: ProductListComponent },
  { path: ':action', component: ProductActionComponent  },
  { path: ':action/:id', component: ProductActionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
