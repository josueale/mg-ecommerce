import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { createPopper } from '@popperjs/core';
import { Instance } from '@popperjs/core/lib/popper-lite';

import { AuthService } from 'src/app/shared/services/auth.service';

import { LoginComponent } from '../../../forms/login/login.component';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './user-account.component.html',
})
export class UserAccountComponent {

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

  get auth() {
    return this.authSvc.auth;
  }

}
