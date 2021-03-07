import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/enums/card';
import { User } from '../../interfaces/user';

const TITLE: string = "user detail";

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

  get riskValue() {
    return (Math.round(this.y.risk * 100) / 100).toFixed(2);
  }

  get summedPoints() {
    return this.y.points.flat(Infinity).reduce((a: any, b: any) => a + b, 0);
  }

  get userTitle() {
    return TITLE.toUpperCase();
  }

  cardName() {
    return Card[this.y.card].toLocaleLowerCase();
  }

}
