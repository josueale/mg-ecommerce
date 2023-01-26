import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/app/environments/environments';

import API from 'src/app/shared/types/api.types';
import { Product } from 'src/app/shared/types/product.type';

const initial: Product[] = []

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private route = inject(ActivatedRoute);


  products$ = new BehaviorSubject<Product[]>(initial);

  constructor() {
    this.searchProductByTitle();
  }


  handleNavigate() {
    this.router.navigate(['search'], {
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }


  private queryParams: Params = {
    title: '',
  };

  setCharacters(data: Product[]): void {
    this.products$.next(data);
  }

  searchProductByTitle(productToFind = ''): void {
    console.log('object', productToFind);
    this.http
      .get<API<Product[]>>(
        `${environment.api}/api/v1/search/products?title=${productToFind}`
      )
      .subscribe({
        next: (response) => {
          this.queryParams['title'] = productToFind;
          console.log(response.value);
          this.handleNavigate();
          this.setCharacters(response.value);
        },
        // ? is this bad?
        error: (error) => {
          this.setCharacters([]);
        },
      });
  }
}