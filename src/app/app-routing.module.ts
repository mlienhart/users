import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { BarChartComponent } from './components/user-charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/user-charts/line-chart/line-chart.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserReportComponent } from './components/user-report/user-report.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserTestComponent } from './components/user-test/user-test.component';
import { ListChartComponent } from './components/user-charts/list-chart/list-chart.component';
import { PieChartComponent } from './components/user-charts/pie-chart/pie-chart.component';
import { RadarChartComponent } from './components/user-charts/radar-chart/radar-chart.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { LoggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-start-page' },
  { path: 'app-start-page', component: StartPageComponent },
  { path: 'app-access-denied', component: AccessDeniedComponent },
  {
    path: 'routing', canActivate: [LoggedInGuard], children: [
      { path: 'app-user-list', component: UserListComponent },
      { path: 'app-user-report', component: UserReportComponent },
      { path: 'app-user-table', component: UserTableComponent },
      { path: 'app-user-test', component: UserTestComponent },
      { path: 'app-line-chart', component: LineChartComponent },
      { path: 'app-bar-chart', component: BarChartComponent },
      { path: 'app-pie-chart', component: PieChartComponent },
      { path: 'app-radar-chart', component: RadarChartComponent },
      { path: 'app-list-chart', component: ListChartComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
