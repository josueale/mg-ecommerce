import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

// import { MainLogoComponent } from 'src/app/shared/components/logos/main-logo/main-logo.component';
import { LogosModule } from 'src/app/shared/components/logos/logos.module';
import { SearchBarComponent } from 'src/app/shared/components/navbar/components/search-bar/search-bar.component';
import { UserAccountComponent } from 'src/app/shared/components/navbar/components/user-account/user-account.component';
import { UserCartCounterComponent } from 'src/app/shared/components/navbar/components/user-cart-counter/user-cart-counter.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';


@NgModule({
  declarations: [
    AuthComponent,
    NavbarComponent,
  ],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SearchBarComponent,
    UserCartCounterComponent,
    UserAccountComponent,
    LogosModule
  ]
})
export class AuthModule { }
