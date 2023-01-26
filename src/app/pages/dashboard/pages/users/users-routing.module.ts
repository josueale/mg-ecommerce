import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './pages/user-list/user-list.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':id', component: UserComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
