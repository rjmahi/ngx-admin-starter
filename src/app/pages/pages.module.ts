import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { STOBillingModule } from './sto-billing/sto-billing.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NbDialogModule } from '@nebular/theme';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [
    PagesRoutingModule,
    STOBillingModule,
    ThemeModule,
    NbDialogModule.forChild(),
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [...PAGES_COMPONENTS],
})
export class PagesModule {}
