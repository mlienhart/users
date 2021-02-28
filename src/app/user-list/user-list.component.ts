import { Component, OnInit } from '@angular/core';
import { USERS } from '../USERS';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = USERS;

  get totalRisks() {
    return this.users.map(x => x.risk).reduce((a, b) => a + b, 0);
  }

  addUser() {
    return this.users.push(
      { id: this.users.length + 1, name: 'x', sex: 'male', risk: 20, card: 2, registered: true, points: [1, 2, 3] }
    );
  }

  deleteUserFromList(a: number) {
    let i = this.users.findIndex(x => { return x.id === a });
    return this.users.splice(i, 1);
  }

  selectedUser: any;

  onSelect(value: any): void {
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
