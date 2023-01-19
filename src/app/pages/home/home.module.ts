import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';

// import { ProductCardModule } from './components/product-card/product-card.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    ProductCardComponent,
    // ProductCardModule,
  ]
})
export class HomeModule { }
