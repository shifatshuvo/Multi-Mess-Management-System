import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberComponent } from './member/member.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MemberComponent,
    UpdateMemberComponent,
    AddMemberComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MembersModule { }
