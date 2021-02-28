import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/enums/card';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() y: User;
  constructor() { }

  ngOnInit(): void {
  }

  cardName() {
    return Card[this.y.card].toLocaleLowerCase();
  }

}
