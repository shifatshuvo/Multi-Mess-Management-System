import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealComponent } from './meal/meal.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { UpdateMealComponent } from './update-meal/update-meal.component';

const routes: Routes = [
  {
    path: "",
    component: MealComponent
  },
  {
    path: 'add',
    component: AddMealComponent
  },
  {
    path: 'update/:id',
    component: UpdateMealComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealRoutingModule { }
