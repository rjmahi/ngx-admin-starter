import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoBillingComponent } from '../pages/sto-billing/sto-billing.component';
import { StoBillingViewComponent } from '../pages/sto-billing/sto-billing-view/sto-billing-view.component';
import { StoBillingAddComponent } from '../pages/sto-billing/sto-billing-add/sto-billing-add.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'sto/:id',
        component: StoBillingComponent,
      },
      {
        path: 'view/:id',
        component: StoBillingViewComponent,
      },
      {
        path: 'add/:id/:screen',
        component: StoBillingAddComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
