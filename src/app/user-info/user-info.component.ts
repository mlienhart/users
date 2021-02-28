import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../Card';
import { User } from '../User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() x: User;
  @Output() onUserDelete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(id: number) {
    return this.onUserDelete.emit(id);
  }

  cardName() {
    return Card[this.x.card].toLocaleLowerCase();
  }

}
