import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from 'src/app/shared/types/product.type';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cartSvc: CartService,
  ) { }

  details!: Product

  handleAddToCart(productId: string) {
    this.cartSvc.addProductToCart({ productId, quantity: 1 })
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ detail }) => {
      console.log(detail);
      this.details = detail.value

    })
  }

}
