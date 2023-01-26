import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { User } from 'src/app/shared/types/user.types';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-order-customer',
  templateUrl: './order-customer.component.html',
})
export class OrderCustomerComponent {

  @Input() user!: User
  @Input() address: string = ''

}
