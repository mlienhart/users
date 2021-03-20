import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { USERS } from 'src/app/USERS';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users: User[] = [];
  message: string = "User pie chart is empty. You can add some users...";

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  public barChartLabels: Label[] = USERS.map(x => x.name);
  public barChartType: ChartType = "pie";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: USERS.map(x => x.references), label: "user references" },
    { data: USERS.map(x => x.risk), label: "user risk" },
    { data: USERS.map(x => x.successfulLoginAttempts), label: "successful login attempts" },
    { data: USERS.map(x => x.failedLoginAttempts), label: "failed login attempts" }
  ];

}
