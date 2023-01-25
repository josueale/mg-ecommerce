import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-user-cart-counter',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-cart-counter.component.html',
})
export class UserCartCounterComponent {

  constructor(
    private cartSvc: CartService,

  ) { }

  get cart() {
    return this.cartSvc.cart
  }


  @ViewChild('drawerContent') drawerContent!: ElementRef<HTMLDivElement>

  showDrawer = false
  time = 100

  toggleDrawer() {
    this.showDrawer = !this.showDrawer

    if (this.showDrawer) {
      setTimeout(() => {
        this.drawerContent.nativeElement.classList.remove("translate-x-full")
      }, this.time)

      this.drawerContent.nativeElement.classList.remove("hidden")
      this.drawerContent.nativeElement.classList.add("transition-transform")
      this.drawerContent.nativeElement.classList.add("right-0")
      this.drawerContent.nativeElement.classList.add("top-0")

    } else {
      this.drawerContent.nativeElement.classList.add("translate-x-full")

      setTimeout(() => {
        this.drawerContent.nativeElement.classList.add("hidden")
        this.drawerContent.nativeElement.classList.remove("transition-transform")
        this.drawerContent.nativeElement.classList.remove("right-0")
        this.drawerContent.nativeElement.classList.remove("top-0")
      }, this.time)
    }

  }

}
