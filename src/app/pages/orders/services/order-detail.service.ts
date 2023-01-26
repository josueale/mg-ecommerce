import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import API from 'src/app/shared/types/api.types';
import { Order } from 'src/app/shared/types/order.types';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService implements Resolve<unknown>{

  constructor(
    private http: HttpClient,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<API<Order>> {
    const orderId = route.params['id']

    return this.http.get<API<Order>>(`${environment.api}/api/v1/orders/${orderId}`)
  }

}
