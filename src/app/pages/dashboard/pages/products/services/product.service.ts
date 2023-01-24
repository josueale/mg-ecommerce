import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/app/environments/environments';
import API from 'src/app/shared/types/api.types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  createProduct(data: any) {
    return this.http.post<API<any>>(`${environment.api}/api/v1/products`, data)
  }

}
