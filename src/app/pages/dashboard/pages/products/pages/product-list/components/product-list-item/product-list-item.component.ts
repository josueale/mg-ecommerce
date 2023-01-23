import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
})
export class ProductListItemComponent {

  @Input() name: string = ""
  @Input() category: string = ""
  @Input() price: number = 0
  @Input() isAvailable: boolean = false



}
