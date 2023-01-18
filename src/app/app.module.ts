import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MainLogoComponent } from './shared/components/logos/main-logo/main-logo.component';

import { SearchBarComponent } from './shared/components/navbar/components/search-bar/search-bar.component';
import { UserAccountComponent } from './shared/components/navbar/components/user-account/user-account.component';
import { UserCartCounterComponent } from './shared/components/navbar/components/user-cart-counter/user-cart-counter.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainLogoComponent,
    // ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserCartCounterComponent,
    UserAccountComponent,
    SearchBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
