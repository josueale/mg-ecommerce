import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
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

    // this.authSvc.login(form).subscribe();
  }


  ngOnInit(): void {

  }



}
