import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { AuthService } from 'src/app/shared/services/auth.service';

import { UserAccountLoggedComponent } from './logged/logged.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [CommonModule, UnauthorizedComponent, UserAccountLoggedComponent],
  templateUrl: './user-account.component.html',
})
export class UserAccountComponent {

  constructor(
    private authSvc: AuthService,
  ) { }

  get auth() {
    return this.authSvc.auth;
  }

}
