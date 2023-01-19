import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { SearchBarComponent } from './shared/components/navbar/components/search-bar/search-bar.component';
import { UserAccountComponent } from './shared/components/navbar/components/user-account/user-account.component';
import { UserCartCounterComponent } from './shared/components/navbar/components/user-cart-counter/user-cart-counter.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    UserCartCounterComponent,
    UserAccountComponent,
    SearchBarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
