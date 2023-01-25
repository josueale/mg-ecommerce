import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { environment } from 'src/app/environments/environments';

import API from 'src/app/shared/types/api.types';
import { Product } from 'src/app/shared/types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService implements Resolve<unknown>{

  constructor(
    private http: HttpClient,

  ) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): unknown {
    const productId = route.params['id']

    // todo if no id, cancel

    return this.http.get<API<Product>>(`${environment.api}/api/v1/products/${productId}`)
  }

}
