import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users: User[] = [];

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  displayedColumns: string[] = ['id', 'name', 'birthday', 'sex', 'risk', 'card', 'registered', 'points'];

}
