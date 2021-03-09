import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserReportComponent } from './components/user-report/user-report.component';
import { UserTestComponent } from './components/user-test/user-test.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-user-list' },
  {
    path: 'app-user-test',
    component: UserTestComponent
  },
  {
    path: 'app-user-list',
    component: UserListComponent
  },
  {
    path: 'app-user-report',
    component: UserReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
