import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

import { BannerComponent } from './pages/landing-store/components/banner/banner.component';
import { ProductCardComponent } from './pages/landing-store/components/product-card/product-card.component';
import { ProductSectionComponent } from './pages/landing-store/components/product-section/product-section.component';
import { LandingStoreComponent } from './pages/landing-store/landing-store.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    StoreComponent,
    LandingStoreComponent,
    ProductCardComponent,
    ProductSectionComponent,
    BannerComponent,
    ProductDetailComponent,
    SearchComponent,

  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NavbarModule,
    SwiperModule,

  ]
})
export class StoreModule { }
