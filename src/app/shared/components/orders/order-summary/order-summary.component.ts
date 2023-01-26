import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/shared/types/cart.types';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
})
export class OrderSummaryComponent {

  @Input() cart!: Cart

}
