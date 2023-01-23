import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LogosModule } from '../logos/logos.module';
import { MainFooterComponent } from './main-footer/main-footer.component';



@NgModule({
  declarations: [
    MainFooterComponent,
  ],
  exports: [
    MainFooterComponent,
  ],
  imports: [
    CommonModule,
    LogosModule,
    RouterLink
  ]
})
export class FootersModule { }
