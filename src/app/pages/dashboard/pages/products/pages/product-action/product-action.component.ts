import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/types/product';
import { ProductService } from '../../services/product.service';

type Action = 'edit' | 'view'

interface Meta {
  action: Action
  id?: string
}


@Component({
  selector: 'app-product-action',
  templateUrl: './product-action.component.html',
})
export class ProductActionComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productSrv: ProductService,
  ) { }

  meta: Meta = {
    action: 'edit',
    id: undefined
  }

  product: Product | null = null

  redirectToProductList() {
    this.router.navigate(['/dashboard/products'])

  }

  getAction() {
    this.route.params.subscribe(params => {

      const validations = [
        params['action'] === 'view',
        params['action'] === 'edit',
      ]

      const isInvalid = validations.every(e => !e)

      if (isInvalid) {
        this.redirectToProductList()
        return
      }

      this.meta.action = params['action']
    })

  }

  getId() {
    this.route.params.subscribe(params => {
      if (!params['id']) {
        this.redirectToProductList()
        return
      }

      this.meta.id = params['id']
    })

  }

  getProductInfo() {
    this.productSrv
      .getProductById(this.meta.id!)
      .subscribe(res => {
        this.product = res.value
      })
  }

  ngOnInit(): void {
    console.log(this.meta);
    this.getAction()
    this.getId()

    this.getProductInfo()

  }

}
