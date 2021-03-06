import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../enums/card';
import { User } from '../../interfaces/user';

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

  get riskValue() {
    return (Math.round(this.x.risk * 100) / 100).toFixed(2);
  }

  getRiskColorClass(value: number): string {
    if (value <= 25) {
      return "green";
    }
    if (value <= 75) {
      return "orange";
    }
    if (value <= 100) {
      return "red";
    }

    return "silver";
  }

}
