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

  isUserSlideToggleOn: boolean = false;
  isTotalsSlideToggleOn: boolean = false;

  ngOnInit(): void {
  }

  get totalRisks() {
    let a = this.z.map(x => x.risk).reduce((a, b) => a + b, 0);
    return a === 0 ? EMPTY_MESSAGE : (Math.round(a * 100) / 100).toFixed(2);
  }

  get totalPoints() {
    let a = this.z.map(x => x.points).flat(Infinity).reduce((a, b) => a + b, 0);
    return a === 0 ? EMPTY_MESSAGE : a;
  }

  get availableUsers() {
    return this.z.length > 0 ? this.z.length : EMPTY_MESSAGE;
  }

  get userNameWithHighestRisk() {
    let a = this.z.map(x => ({ name: x.name, risk: x.risk })).sort((a, b) => a.risk > b.risk ? -1 : 1);
    return a.length > 0 ? a[0]?.name : EMPTY_MESSAGE;
  }

  get userNameWithLowestRisk() {
    let a = this.z.map(x => ({ name: x.name, risk: x.risk })).sort((a, b) => a.risk < b.risk ? -1 : 1);
    return a.length > 0 ? a[0]?.name : EMPTY_MESSAGE;
  }

  get totalFailedLoginAttempts() {
    let a = this.z.map(x => x.failedLoginAttempts).reduce((a, b) => a + b, 0);
    return a === 0 ? EMPTY_MESSAGE : a;
  }

  get totalSuccessfulLoginAttempts() {
    let a = this.z.map(x => x.successfulLoginAttempts).reduce((a, b) => a + b, 0);
    return a === 0 ? EMPTY_MESSAGE : a;
  }

  get totalUserReferences() {
    let a = this.z.map(x => x.references).reduce((a, b) => a + b, 0);
    return a === 0 ? EMPTY_MESSAGE : a;
  }

}
