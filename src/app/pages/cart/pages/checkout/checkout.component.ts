import { AfterContentInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {

  constructor(
    private cartSvc: CartService,
    private authSvc: AuthService,
    private fb: FormBuilder,

  ) { }


  get cart() {
    return this.cartSvc.cart
  }

  get auth() {
    return this.authSvc.auth
  }

  checkout = this.fb.group({
    email: [this.auth.data?.user.email ?? '', [Validators.required, Validators.email]],
    name: [this.auth.data?.user.name ?? '', [Validators.required]],
    billing_address: ['', [Validators.required]],
  })

  onSubmit({ value }: FormGroup) {
    this.cartSvc.checkout({ ...value, user_id: this.auth.data?.user._id })
  }



}
