import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import API from '../types/api.types';
import { HomeContent } from '../types/home.types';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements Resolve<unknown>{

  constructor(
    private http: HttpClient,
  ) { }

  resolve() {
    return this.http.get<API<HomeContent>>('http://localhost:9002/api/v1/home')
  }
}
