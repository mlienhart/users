import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { USERS } from 'src/app/USERS';

@Component({
  selector: 'app-user-charts',
  templateUrl: './user-charts.component.html',
  styleUrls: ['./user-charts.component.css']
})
export class UserChartsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  public barChartLabels: Label[] = USERS.map(x => x.name);
  public barChartType: ChartType = "line";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: USERS.map(x => x.card), label: "user card" },
    { data: USERS.map(x => x.risk), label: "user risk" },
    { data: USERS.map(x => x.id), label: "user id" }
  ];
}
