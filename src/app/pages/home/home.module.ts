import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductCardComponent,
    // ProductCardModule,
  ]
})
export class HomeModule { }
