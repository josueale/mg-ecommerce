import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-account.component.html',
})
export class UserAccountComponent {

  constructor(
    private authSvc: AuthService,
  ){}

  get auth() {
    return this.authSvc.auth;
  }



}
