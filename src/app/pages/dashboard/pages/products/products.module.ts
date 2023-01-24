import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewProductComponent } from './pages/new-product/new-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductListComponent,
    NewProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
