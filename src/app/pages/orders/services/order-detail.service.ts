import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/app/environments/environments';
import API from 'src/app/shared/types/api.types';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService implements Resolve<unknown>{

  constructor(
    private http: HttpClient,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): unknown {
    const orderId = route.params['id']

    return this.http.get<API<any>>(`${environment.api}/api/v1/orders/${orderId}`)
  }

}
