import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/app/environments/environments';
import API from 'src/app/shared/types/api.types';
import { Product } from 'src/app/shared/types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get<API<Product[]>>(`${environment.api}/api/v1/products`)
  }

  deleteProductById(id: string) {
    return this.http.delete<API<Product>>(`${environment.api}/api/v1/products/${id}`)
  }

  createProduct(data: any) {
    return this.http.post<API<any>>(`${environment.api}/api/v1/products`, data)
  }

}
