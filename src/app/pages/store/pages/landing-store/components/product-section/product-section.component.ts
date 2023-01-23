import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
})
export class ProductSectionComponent {

  @Input() items: any[] = []
  @Input() name: string = ''



}
