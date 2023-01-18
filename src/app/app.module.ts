import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductCardComponent } from './pages/home/components/product-card/product-card.component';
import { UserAccountComponent } from './shared/components/navbar/components/user-account/user-account.component';
import { UserCartCounterComponent } from './shared/components/navbar/components/user-cart-counter/user-cart-counter.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserCartCounterComponent,
    UserAccountComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
