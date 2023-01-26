import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/types/product.type';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  constructor(
    private searchSvc: SearchService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public products$!: Observable<Product[]>;


  handleNavigate() {
    this.router.navigate(['search'], {
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }


  private queryParams: Params = {
    name: '',
  };

  clearSearch(): void {
    this.queryParams['name'] = null;
    this.handleNavigate();

    this.searchSvc.searchProductByTitle('');
  }



  onSearch(value: string) {
    this.searchSvc.searchProductByTitle(value);

    this.queryParams['name'] = value;

    this.handleNavigate();
  }

  ngOnInit() {
    this.products$ = this.searchSvc.products$;
  }

}
