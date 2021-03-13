import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { USERS } from 'src/app/USERS';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  public barChartLabels: Label[] = USERS.map(x => x.name);
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: USERS.map(x => x.card), label: "user card" },
    { data: USERS.map(x => x.risk), label: "user risk" },
    { data: USERS.map(x => x.id), label: "user id" }
  ];
}
