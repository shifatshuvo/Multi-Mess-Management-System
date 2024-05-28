import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealRoutingModule } from './meal-routing.module';
import { MealComponent } from './meal/meal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateMealComponent } from './update-meal/update-meal.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MealComponent,
    UpdateMealComponent,
    AddMealComponent
  ],
  imports: [
    CommonModule,
    MealRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class MealModule { }
