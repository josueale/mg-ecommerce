import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
})
export class NewProductComponent {

  constructor(
    private fb: FormBuilder,
    private productSrv: ProductService,
  ) { }


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

  handleOnSubmit({ value: form }: FormGroup) {
    // TODO validate answer
    // ?  redirect to login???
    console.log({ form });

    this.productSrv.createProduct(form).subscribe(res => {
      console.log(res);
    })



  }



}
