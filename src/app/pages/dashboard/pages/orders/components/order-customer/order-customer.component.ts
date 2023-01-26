import { Component, Input } from '@angular/core';

import { User } from 'src/app/shared/types/user.types';

@Component({
  selector: 'app-order-customer',
  templateUrl: './order-customer.component.html',
})
export class OrderCustomerComponent {

  @Input() user!: User
  @Input() address: string = ''

}
