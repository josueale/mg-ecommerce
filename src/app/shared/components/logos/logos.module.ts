import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainLogoComponent } from './main-logo/main-logo.component';



@NgModule({
  declarations: [
    MainLogoComponent
  ],
  exports: [
    MainLogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LogosModule { }
