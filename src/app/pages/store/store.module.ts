import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { LandingStoreComponent } from './pages/landing-store/landing-store.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ProductCardComponent } from './pages/landing-store/components/product-card/product-card.component';
import { ProductSectionComponent } from './pages/landing-store/components/product-section/product-section.component';


@NgModule({
  declarations: [
    StoreComponent,
    LandingStoreComponent,
    ProductCardComponent,
    ProductSectionComponent,

  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NavbarModule,
  ]
})
export class StoreModule { }
