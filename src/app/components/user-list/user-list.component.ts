import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users: User[] = [];

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  addUser() {
    return this.users.push(
      { id: this.users.length + 1, name: 'x', birthday: '1964-02-26T17:17:53Z', sex: 'male', risk: 20, card: 2, registered: true, points: [1, 2, 3], references: 7 }
    );
  }

  deleteUserFromList(a: number) {
    let i = this.users.findIndex(x => { return x.id === a });
    return this.users.splice(i, 1);
  }

  selectedUser: any;

  onUserSelect(value: any): void {
    this.selectedUser = value;
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
