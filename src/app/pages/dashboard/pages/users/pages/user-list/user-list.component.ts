import { Component } from '@angular/core';
import { UserList } from 'src/app/shared/types/user.types';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {

  constructor(
    private userSvc: UsersService,
  ) { }


  userList: UserList = []

  async handleDeleteUser(id: string) {
    console.log(id);


    const result = await Swal.fire(
      {
        title: 'You sure about this?',
        text: 'Do you really want to delete this item?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yep, delete it 🔫',
        cancelButtonText: 'No, cancel action 😮‍💨',
      }
    )

    if (result.isConfirmed) {

      this.userSvc
        .deleteUserById(id)
        .subscribe((res) => {
          if (res.isSuccess) {
            Swal.fire('User deleted 🥶')
            this.getUsers()

          }
        })

    } else {
      Swal.fire('Action canceled 😮‍💨', 'Your item was not modifed 👌')

    }

  }

  getUsers() {
    this.userSvc.getUsers().subscribe((res) => {
      this.userList = res.value
    })
  }

  ngOnInit(): void {
    console.log('ola');
    this.getUsers()
  }


}
