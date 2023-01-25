import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/types/product.type';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  @Input() item!: Product

}
