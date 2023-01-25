import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/types/product.type';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
})
export class ProductSectionComponent {

  @Input() items: Product[] = []
  @Input() name: string = ''

}
