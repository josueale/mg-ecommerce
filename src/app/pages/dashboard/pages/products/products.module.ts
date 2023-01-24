import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { FloatingButtonComponent } from 'src/app/shared/components/floating-button/floating-button.component';

import { ProductActionComponent } from './pages/product-action/product-action.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductActionComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    FloatingButtonComponent,
  ]
})
export class ProductsModule { }
