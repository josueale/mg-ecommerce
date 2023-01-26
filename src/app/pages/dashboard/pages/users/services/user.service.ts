import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/app/environments/environments';

import API from 'src/app/shared/types/api.types';
import { UserForAdmin } from 'src/app/shared/types/user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }


  getUserById(userId: string) {
    return this.http.get<API<UserForAdmin>>(`${environment.api}/api/v1/users/admin/${userId}`)
  }

}
