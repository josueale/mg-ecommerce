import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {

constructor(
  private authSvc: AuthService,
  ){}


  handleLogout(){
    this.authSvc.logout()
  }

}
