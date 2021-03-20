import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-chart',
  templateUrl: './list-chart.component.html',
  styleUrls: ['./list-chart.component.css']
})
export class ListChartComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users: User[] = [];
  message: string = "User chart list is empty. You can add some users...";

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

}
