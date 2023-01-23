import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { ProductCardComponent } from './pages/landing-store/components/product-card/product-card.component';
import { ProductSectionComponent } from './pages/landing-store/components/product-section/product-section.component';
import { LandingStoreComponent } from './pages/landing-store/landing-store.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { BannerComponent } from './pages/landing-store/components/banner/banner.component';


@NgModule({
  declarations: [
    StoreComponent,
    LandingStoreComponent,
    ProductCardComponent,
    ProductSectionComponent,
    BannerComponent,

  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NavbarModule,
    SwiperModule,

  ]
})
export class StoreModule { }
