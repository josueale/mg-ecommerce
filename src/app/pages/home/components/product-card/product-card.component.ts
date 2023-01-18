// import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  title = 'ayuda'

  ngOnInit(){
    console.log('loaded?');
  }

}
