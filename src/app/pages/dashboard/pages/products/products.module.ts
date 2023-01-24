import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { NewProductComponent } from './pages/product-list/components/new-product/new-product.component';


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
