import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UserForAdmin } from 'src/app/shared/types/user.types';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  constructor(
    private userSvc: UserService,
    private route: ActivatedRoute,
  ) { }

  user!: UserForAdmin

  getUser(id: string) {
    this.userSvc.getUserById(id).subscribe(res => {
      this.user = res.value
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      if (params['id']) {
        this.getUser(params['id'])
      }

    })
  }


}

