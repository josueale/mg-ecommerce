import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserListComponent } from './pages/user-list/user-list.component';
import { UserComponent } from './pages/user/user.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
