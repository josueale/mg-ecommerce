import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/types/product.type';

@Component({
    standalone:true,
  imports: [CommonModule],
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
})
export class OrderItemComponent {

  @Input() product!: Product


}
