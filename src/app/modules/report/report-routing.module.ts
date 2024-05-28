import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserReportComponent } from './user-report/user-report.component';
import { MessReportComponent } from './mess-report/mess-report.component';

const routes: Routes = [
  {
    path: "user",
    component: UserReportComponent
  },
  {
    path: "mess",
    component: MessReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
