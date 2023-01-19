import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'mg-ecommerce';
  constructor(
    private authSvc: AuthService,

  ) {

  }
  ngOnInit() {
    this.authSvc.initApp()
  }
}
