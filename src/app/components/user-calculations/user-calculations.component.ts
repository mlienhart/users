import { Component, Input, OnInit } from '@angular/core';

const EMPTY_MESSAGE: string = "n/a";

@Component({
  selector: 'app-user-calculations',
  templateUrl: './user-calculations.component.html',
  styleUrls: ['./user-calculations.component.css']
})
export class UserCalculationsComponent implements OnInit {
  @Input() z: any;
  constructor() { }

  isSlideToggleOn: boolean = false;

  ngOnInit(): void {
  }

  get totalRisks() {
    let a = this.z.map(x => x.risk).reduce((a, b) => a + b, 0);
    return a === 0 ? EMPTY_MESSAGE : (Math.round(a * 100) / 100).toFixed(2);
  }

  get totalPoints() {
    let a = this.z.map(x => x.points).flat(Infinity).reduce((a, b) => a + b, 0);
    return a === 0 ? EMPTY_MESSAGE : (Math.round(a * 100) / 100).toFixed(2);
  }

}
