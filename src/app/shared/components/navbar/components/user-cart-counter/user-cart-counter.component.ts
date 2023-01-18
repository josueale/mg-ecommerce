import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-cart-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-cart-counter.component.html',
})
export class UserCartCounterComponent {

  productsCount = 10

}
