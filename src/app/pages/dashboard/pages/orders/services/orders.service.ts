import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/app/environments/environments';
import API from 'src/app/shared/types/api.types';
import { Order } from 'src/app/shared/types/order.types';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  /* TODO
    [ ] Move Order-list, here?
    [ ] Make pagination available, here?
  */

  constructor(
    private http: HttpClient,
  ) { }

  getOrders() {
    return this.http.get<API<Order[]>>(`${environment.api}/api/v1/orders`)
  }

  getOrderById(id: string) {
    return this.http.get<API<Order>>(`${environment.api}/api/v1/orders/${id}`)
  }

}
