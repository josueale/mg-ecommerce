import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/shared/types/cart.types';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
})
export class OrderSummaryComponent {

  @Input() cart!: Cart

}
