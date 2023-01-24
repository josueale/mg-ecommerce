import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Meta } from 'src/app/shared/types/product.type';

import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-product-action',
  templateUrl: './product-action.component.html',
})
export class ProductActionComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productSrv: ProductService,
    private fb: FormBuilder,
  ) { }

  meta: Meta = {
    action: 'new',
    id: undefined
  }

  product: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    category: ['', [Validators.required]],

    price: [0, [Validators.required, Validators.min(0)]],

    stock: [0, Validators.min(0)],
    in_stock: [false],

    is_on_sale: [false],
    on_sale_price: [0, [Validators.min(0)]],
    // tags: [''],

    description: [''],
  })


  redirect(url: string = '/') {
    this.router.navigate(['/dashboard/products' + url])

  }

  getAction() {
    this.route.params.subscribe(params => {

      const validations = [
        params['action'] === 'view',
        params['action'] === 'edit',
        params['action'] === 'new',
      ]

      const isInvalid = validations.every(e => !e)

      if (isInvalid) {
        this.redirect()
        return
      }

      this.meta.action = params['action']
    })

  }

  // [ ] can be improved
  getId() {
    this.route.params.subscribe(params => {
      if (params['id'] && this.meta.action === 'new') {
        this.redirect('/new')
        return
      }

      if (!params['id'] && this.meta.action === 'edit') {
        this.redirect()
        return
      }

      if (!params['id'] && this.meta.action === 'view') {
        this.redirect()
        return
      }

      this.meta.id = params['id']
    })

  }

  getProductInfo() {
    if (this.meta.id) {
      this.productSrv
        .getProductById(this.meta.id!)
        .subscribe(res => {

          // Object.keys(this.product.controls).forEach((key: string) => {
          //   this.product[key].setValue(res.value[key])
          // });

          this.product.controls['title'].setValue(res.value.title)
          this.product.controls['category'].setValue(res.value.category)
          this.product.controls['description'].setValue(res.value.description)
          this.product.controls['price'].setValue(res.value.price)
          this.product.controls['stock'].setValue(res.value.stock)
          this.product.controls['in_stock'].setValue(res.value.in_stock)
          this.product.controls['is_on_sale'].setValue(res.value.is_on_sale)
          this.product.controls['on_sale_price'].setValue(res.value.on_sale_price)

        })
    }

  }


  // [ ] this can be improved
  handleOnSubmit({ value: form }: FormGroup, shouldRedirect = true) {

    if (this.meta.action === 'view') {
      return
    }

    if (this.meta.action === 'new') {
      this.productSrv.createProduct(form).subscribe(res => {

        if (res.isSuccess && shouldRedirect) {
          this.redirect()
        }

      })
    } else {

      this.productSrv.createProduct(form).subscribe(res => {

        if (res.isSuccess && shouldRedirect) {
          this.redirect()
        }

      })
    }

  }



  ngOnInit(): void {
    this.getAction()
    this.getId()
    this.getProductInfo()
  }

}
