import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  example = [
    { name: 'Apple MacBook Pro 17"', category: 'Laptop', isAvailable: false, price: 2999 },
    { name: 'Microsoft Surface Pro', category: 'Laptop PC', isAvailable: false, price: 1999 },
    { name: 'Magic Mouse 2', category: 'Accessories', isAvailable: true, price: 99 },
    { name: 'Apple Watch', category: 'Watches', isAvailable: false, price: 199 },
    { name: 'Apple iMac', category: 'PC', isAvailable: false, price: 2999 },
    { name: 'Apple AirPods', category: 'Accessories', isAvailable: false, price: 399 },
    { name: 'iPad Pro', category: 'Tablet', isAvailable: false, price: 699 },
    { name: 'Magic Keyboard', category: 'Accessories', isAvailable: false, price: 99 },
    { name: 'Apple TV 4K', category: 'TV', isAvailable: false, price: 179 },
    { name: 'AirTag', category: 'Accessories', isAvailable: false, price: 29 },

  ]
}
