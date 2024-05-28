import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'meal',
        loadChildren: () => import('./modules/meal/meal.module').then(m => m.MealModule)
      },
      {
        path: 'grocery',
        loadChildren: () => import('./modules/grocery/grocery.module').then(m => m.GroceryModule)
      },
      {
        path: 'fund',
        loadChildren: () => import('./modules/fund/fund.module').then(m => m.FundModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./modules/report/report.module').then(m => m.ReportModule)
      },
      {
        path: 'members',
        loadChildren: () => import('./modules/members/members.module').then(m => m.MembersModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
