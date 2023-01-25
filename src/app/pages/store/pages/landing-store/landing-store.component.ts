import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeContent } from 'src/app/shared/types/home.types';

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-landing-store',
  templateUrl: './landing-store.component.html',
})
export class LandingStoreComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  content: HomeContent = {
    banners:[],
    bestSellers: [],
    mostPopular: []
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ response }) => {
      console.log(response.value);
      this.content = response.value
    })
  }

}
