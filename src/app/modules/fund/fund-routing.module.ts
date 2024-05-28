import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from './fund/fund.component';
import { UpdateFundComponent } from './update-fund/update-fund.component';
import { AddFundComponent } from './add-fund/add-fund.component';

const routes: Routes = [
  {
    path: '',
    component: FundComponent
  },
  {
    path: 'update/:id',
    component: UpdateFundComponent
  },
  {
    path: 'add',
    component: AddFundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundRoutingModule { }
