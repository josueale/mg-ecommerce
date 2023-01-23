import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
  ) { }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  isValidField(field: string) {
    return (
      !this.loginForm.controls[field].valid &&
      this.loginForm.controls[field].touched
    );
  }


  handleOnSubmit({ value: form }: FormGroup) {
    // TODO validate answer
    // ?  redirect to login???

    this.authSvc.login(form).subscribe();
  }

}


