import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Instance, createPopper } from '@popperjs/core';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-account-logged',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logged.component.html',

})
export class UserAccountLoggedComponent {

  constructor(
    private authSvc: AuthService,
  ) { }


  @ViewChild('userMenuButton') userMenuButton !: ElementRef<HTMLButtonElement>
  @ViewChild('userDropdown') userDropdown !: ElementRef<HTMLDivElement>

  private Popper: Instance | null = null

  dropdownHanlder() {

    if (!this.Popper) {
      this.userDropdown.nativeElement.classList.remove('hidden')

      this.Popper = createPopper(this.userMenuButton.nativeElement, this.userDropdown.nativeElement, {
        placement: 'bottom-end',
        modifiers: []
      })

    } else {
      this.userDropdown.nativeElement.classList.add('hidden')
      this.Popper.destroy()
      this.Popper = null
    }

  }

  handleLogOut() {
    this.authSvc.logout()
  }

  get auth() {
    return this.authSvc.auth;
  }

}


