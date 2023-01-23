import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLandingComponent } from './pages/user-landing/user-landing.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: UserLandingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
