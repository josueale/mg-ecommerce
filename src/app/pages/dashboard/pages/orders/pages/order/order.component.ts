import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from 'src/app/shared/types/order.types';

import { OrderService } from '../../services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  constructor(
    private orderSvc: OrderService,
    private route: ActivatedRoute,

  ) { }


  order: Order | null = null


  getOrder(orderId: string) {
    this.orderSvc.getOrderById(orderId).subscribe((res) => {

      this.order = res.value

    })
  }


  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getOrder(params['id'])
      }

    })


  }

}
