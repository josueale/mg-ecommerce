import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { ProductActionComponent } from './pages/product-action/product-action.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductListComponent,
    NewProductComponent,
    ProductActionComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
  ]
})
export class ProductsModule { }
