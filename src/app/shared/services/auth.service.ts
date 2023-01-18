import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';

import API from '../types/api.types';
import { AppContext, LoginForm, RegisterForm } from '../types/auth.types';
import { User, UserLogin } from '../types/user.types';

import { environment } from '../../environments/environments';
import { StorageService } from './storage.service';


const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  isExpired: false,
  data: null,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }

  private clientHttp = inject(HttpClient);
  private storageSrv = inject(StorageService);
  private router = inject(Router);

  private app: AppContext = initialState;

  get auth() {
    return { ...this.app };
  }

  validateAuthorization() {
    const token = this.storageSrv.get<string>(environment.userKey);

    if (!token) {
      return of(false)
    };

    this.loginByToken(token).subscribe()
    return of(true);

    // huh?
    // this.loginByToken(token).subscribe((res) => {
    //   console.log('4');
    //   if (res.status === 'success') {
    //     console.log('5');
    //     console.log(res);
    //     return of(true);
    //   }
    //   console.log('6');

    //   return of(false);
    // });

  }

  saveUser(token: string) {
    this.storageSrv.save(environment.userKey, token)
  }

  logout() {
    this.app = initialState;
    this.storageSrv.remove(environment.userKey);
    this.router.navigate(['/']);
  }

  login(credentials: LoginForm) {
    return this.clientHttp
      .post<API<UserLogin>>(`${environment.api}/api/v1/users/login`, credentials)
      .pipe(
        tap((res) => {
          this.saveUser(res.value.token)
          this.app = {
            isAuthenticated: true,
            isExpired: false,
            isInitialized: true,
            data: {
              token: res.value.token,
              user: res.value.user,
            },
          };
        })
      );
  }

  loginByToken(token: string) {
    return this.clientHttp
      .post<API<UserLogin>>(`${environment.api}/api/v1/users/login/token`, { token })
      .pipe(
        tap((res) => {
          if (res.isSuccess) {
            this.app = {
              isAuthenticated: true,
              isInitialized: true,
              isExpired: false,
              data: {
                user: res.value.user,
                token: res.value.token,
              },
            };
          }
        })
      );
  }

  register(credentials: RegisterForm) {
    return this.clientHttp.post<API<User>>(
      `${environment.api}/api/v1/users/register`,
      credentials
    );
  }

  setAppContext(
    newState: AppContext | ((prevState: AppContext) => AppContext)
  ) {
    if (typeof newState === 'function') {
      this.app = newState(this.app);
      return;
    }

    this.app = newState;
  }

  initApp() {
    console.log('From on init of app-component');

    const token = this.storageSrv.get<string>(environment.userKey);

    if (!token) {
      this.setAppContext(initialState);
      return;
    }

    if (token) {
      this.loginByToken(token).subscribe();
    }
  }
}
