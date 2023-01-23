import { Component, ElementRef, ViewChild } from '@angular/core';

import { createPopper } from '@popperjs/core';
import { Instance } from '@popperjs/core/lib/popper-lite';


@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
})
export class DashboardNavbarComponent {

  @ViewChild('userMenuButton') userMenuButton !: ElementRef<HTMLDivElement>
  @ViewChild('userDropdown') userDropdown !: ElementRef<HTMLDivElement>

  private Popper: Instance | null = null


  dropdownHanlder() {

    if (!this.Popper) {
      this.userDropdown.nativeElement.classList.remove('hidden')

      this.Popper = createPopper(this.userMenuButton.nativeElement, this.userDropdown.nativeElement, {
        placement: 'bottom-end',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ]
      })

    } else {
      this.userDropdown.nativeElement.classList.add('hidden')
      this.Popper.destroy()
      this.Popper = null
    }





  }

  // ngAfterViewInit() {
  //   // this.Popper = createPopper(this.userDropdown.nativeElement, this.userDropdown.nativeElement)
  // }


  // ngOnInit(): void {
  //   console.log(this.userDropdown);
  //   // createPopper(this.userDropdown?.nativeElement, this.userDropdown?.nativeElement, {
  //   //   placement: 'bottom',
  //   // });
  // }

}
