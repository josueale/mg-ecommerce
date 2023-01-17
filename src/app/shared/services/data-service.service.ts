import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements Resolve<unknown>{

  constructor(
    private http: HttpClient
  ) { }

  resolve(): Observable<unknown> {
    return this.http.get<unknown>('http://localhost:9002/api/v1/products')
  }
}
