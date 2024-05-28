import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryRoutingModule } from './grocery-routing.module';
import { GroceryComponent } from './grocery/grocery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateGroceryComponent } from './update-grocery/update-grocery.component';
import { FormsModule } from '@angular/forms';
import { AddGroceryComponent } from './add-grocery/add-grocery.component';


@NgModule({
  declarations: [
    GroceryComponent,
    UpdateGroceryComponent,
    AddGroceryComponent
  ],
  imports: [
    CommonModule,
    GroceryRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class GroceryModule { }
