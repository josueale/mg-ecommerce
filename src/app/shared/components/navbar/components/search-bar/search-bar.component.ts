import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';
import { SearchService } from 'src/app/pages/store/services/search.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {

  constructor(
    private searchSvc: SearchService,
  ) { }

  inputSearch = new FormControl('', { nonNullable: true });

  onClick() {
    this.inputSearch.reset()
  }


  onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((value: string) => value.trim()),
        // we actually dont need this, its possible that user want to search ALL products
        // filter((value: string) => value !== '' && value !== null),
        debounceTime(400),
        distinctUntilChanged(),
        tap((value: string) => this.searchSvc.searchProductByTitle(value))
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.onChange();
  }
}
