import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundRoutingModule } from './fund-routing.module';
import { FundComponent } from './fund/fund.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateFundComponent } from './update-fund/update-fund.component';
import { FormsModule } from '@angular/forms';
import { AddFundComponent } from './add-fund/add-fund.component';


@NgModule({
  declarations: [
    FundComponent,
    UpdateFundComponent,
    AddFundComponent
  ],
  imports: [
    CommonModule,
    FundRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    FundComponent
  ]
})
export class FundModule { }
