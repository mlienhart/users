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

  infoMessage: string = "Input field accepts only numbers, spaces and commas.";

  ngOnInit(): void {
  }

  get riskValue() {
    return (Math.round(this.y.risk * 100) / 100).toFixed(2);
  }

  get summedPoints() {
    return this.y.points.flat(Infinity).reduce((a: any, b: any) => a + b, 0);
  }

  get points() {
    return this.y.points.flat(Infinity).join(', ');
  }

  get userTitle() {
    return TITLE.toUpperCase();
  }

  cardName() {
    return Card[this.y.card].toLocaleLowerCase();
  }

  onOpenUserInfoInNewTab() {
    window.open("http://localhost:4200/#/routing/app-user-data");
  }

}
