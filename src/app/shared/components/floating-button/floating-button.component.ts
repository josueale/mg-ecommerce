import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
})
export class FloatingButtonComponent {

  @Input() url: string = ''


}
