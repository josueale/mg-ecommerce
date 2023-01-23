import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLandingComponent } from './pages/user-landing/user-landing.component';
import { UserAsideComponent } from './components/user-aside/user-aside.component';


@NgModule({
  declarations: [
    UserComponent,
    UserLandingComponent,
    UserAsideComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NavbarModule
  ]
})
export class UserModule { }
