import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-store',
  templateUrl: './landing-store.component.html',
})
export class LandingStoreComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    console.log('oda');

    this.route.data.subscribe(({ response }) => {
      console.log(response.value);
    })
  }

}
