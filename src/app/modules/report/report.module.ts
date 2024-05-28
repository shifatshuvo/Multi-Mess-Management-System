import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { MessReportComponent } from './mess-report/mess-report.component';
import { UserReportComponent } from './user-report/user-report.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MessReportComponent,
    UserReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule
  ]
})
export class ReportModule { }
