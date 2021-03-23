import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-filter-bar',
  templateUrl: './user-filter-bar.component.html',
  styleUrls: ['./user-filter-bar.component.css']
})
export class UserFilterBarComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users: User[] = [];
  isFilterBarSlideToggleOn: boolean = false;

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  sortUsersByNameAscending() {
    return this.users.sort((a, b) => a.name < b.name ? -1 : 1);
  }

  sortUsersByNameDescending() {
    return this.users.sort((a, b) => a.name > b.name ? -1 : 1);
  }

  sortRisksAscending() {
    return this.users.sort((a, b) => a.risk < b.risk ? -1 : 1);
  }

  sortRisksDescending() {
    return this.users.sort((a, b) => a.risk > b.risk ? -1 : 1);
  }

}
