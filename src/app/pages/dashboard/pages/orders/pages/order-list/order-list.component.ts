import { Component } from '@angular/core';
import { OrderService } from '../../services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent {


  orderList : any[] = []

  constructor(
    private orderSvc:OrderService,
  ){}

  getOrders() {
    this.orderSvc.getOrders().subscribe(res => {
      this.orderList = res.value;
    })
  }

  ngOnInit(): void {
    this.getOrders()
  }






}
