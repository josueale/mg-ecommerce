import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Product } from 'src/app/shared/types/product.type';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  constructor(
    private productSvc: ProductService,
  ) { }

  getProducts() {
    this.productSvc.getProducts().subscribe(res => {
      this.productList = res.value;
    })
  }

  ngOnInit(): void {
    this.getProducts()
  }


  async handleDeleteProduct(id: string) {
    console.log({ id });


    const result = await Swal.fire(
      {
        title: 'You sure about this?',
        text: 'Do you really want to delete this item?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yep, delete it 🔫',
        cancelButtonText: 'No, cancel action 😮‍💨',
      }
    )

    if (result.isConfirmed) {

      this.productSvc
        .deleteProductById(id)
        .subscribe((res) => {
          if (res.isSuccess) {
            Swal.fire('Product deleted 🥶')
            this.getProducts()

          }
        })

    } else {
      Swal.fire('Action canceled 😮‍💨', 'Your item was not modifed 👌')

    }

  }

}
