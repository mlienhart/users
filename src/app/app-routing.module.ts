import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { UserChartsComponent } from './components/user-charts/user-charts.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserReportComponent } from './components/user-report/user-report.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserTestComponent } from './components/user-test/user-test.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-start-page' },
  { path: 'app-start-page', component: StartPageComponent },
  {
    path: 'routing', children: [
      { path: 'app-user-list', component: UserListComponent },
      { path: 'app-user-report', component: UserReportComponent },
      { path: 'app-user-table', component: UserTableComponent },
      { path: 'app-user-test', component: UserTestComponent },
      { path: 'app-user-charts', component: UserChartsComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
