import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { AddMemberComponent } from './add-member/add-member.component';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent
  },
  {
    path: 'update/:id',
    component: UpdateMemberComponent
  },
  {
    path: 'add',
    component: AddMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
