import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/app/environments/environments';

import API from 'src/app/shared/types/api.types';
import { UserList } from 'src/app/shared/types/user.types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  deleteUserById(id: string) {
    return this.http.delete<API<UserList>>(`${environment.api}/api/v1/users/user/${id}`)
  }

  getUsers() {
    return this.http.get<API<UserList>>(`${environment.api}/api/v1/users/admin`)
  }

}
