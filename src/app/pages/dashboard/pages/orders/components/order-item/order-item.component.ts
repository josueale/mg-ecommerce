import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/types/product.type';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
})
export class OrderItemComponent {

  @Input() product!: Product


}
