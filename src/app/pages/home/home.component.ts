import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {

  }


  ngOnInit() {

    this.route.data.subscribe(({ response }) => {
      console.log(response.value);
    });


  }

}
