import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {

}
