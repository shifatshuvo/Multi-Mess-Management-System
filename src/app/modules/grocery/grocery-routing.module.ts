import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryComponent } from './grocery/grocery.component';
import { UpdateGroceryComponent } from './update-grocery/update-grocery.component';
import { AddGroceryComponent } from './add-grocery/add-grocery.component';

const routes: Routes = [
  {
    path: "grocery-bill",
    component: GroceryComponent
  },
  {
    path: 'update/:id',
    component: UpdateGroceryComponent
  },
  {
    path: 'add',
    component: AddGroceryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryRoutingModule { }
