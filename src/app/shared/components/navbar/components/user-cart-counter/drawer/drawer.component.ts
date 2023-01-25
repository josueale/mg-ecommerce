import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cart-drawer',
  standalone: true,
  imports: [CommonModule, RouterLink ],
  templateUrl: './drawer.component.html',
})
export class DrawerComponent {


  @Output() dispatch = new EventEmitter()

  onClick(){
    console.log('e');
    // toggleDrawer()
  }

}
