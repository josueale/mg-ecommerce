import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';

import { LogosModule } from '../logos/logos.module';

import { RouterLink } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { UserCartCounterComponent } from './components/user-cart-counter/user-cart-counter.component';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    UserCartCounterComponent,
    UserAccountComponent,
    SearchBarComponent,
    LogosModule,
    RouterLink,
  ]
})
export class NavbarModule { }
