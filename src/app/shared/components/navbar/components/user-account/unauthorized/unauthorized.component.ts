import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Instance, createPopper } from '@popperjs/core';

import { FormLoginComponent } from 'src/app/shared/components/forms/login/login.component';

@Component({
  selector: 'app-user-account-unauthorized',
  standalone: true,
  imports: [CommonModule, FormLoginComponent],
  templateUrl: './unauthorized.component.html',
})
export class UnauthorizedComponent {

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


}
