import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormLoginComponent } from 'src/app/shared/components/forms/login/login.component';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormLoginComponent,

  ]
})
export class LoginModule { }
