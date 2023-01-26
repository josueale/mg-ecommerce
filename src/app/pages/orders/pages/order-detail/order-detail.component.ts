import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/types/order.types';
import { OrderDetailService } from '../../services/order-detail.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
})
export class OrderDetailComponent {
  constructor(
    private orderSvc: OrderDetailService,
    private route: ActivatedRoute,

  ) { }


  order: Order | null = null





  ngOnInit() {
    console.log('aa');

    this.route.data.subscribe(({ order }) => {

      console.log(order);
      this.order = order.value

    })


  }
}
