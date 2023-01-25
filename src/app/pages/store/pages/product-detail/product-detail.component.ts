import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/types/product.type';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  details!: Product

  handleAddToCart(id: string) {
    console.log(id);

  }


  ngOnInit(): void {
    this.route.data.subscribe(({ detail }) => {
      console.log(detail);
      this.details = detail.value

    })
  }

}
