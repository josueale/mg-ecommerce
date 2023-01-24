import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent }
  // { path: ':action', component: UserActionComponent },
  // { path: ':action/:id', component: UserActionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
