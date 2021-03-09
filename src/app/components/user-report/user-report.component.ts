import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users: User[] = [];

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

}
