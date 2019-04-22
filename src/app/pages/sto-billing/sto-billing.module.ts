import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { StoBillingComponent } from './sto-billing.component';
import { StoBillingAddComponent } from './sto-billing-add/sto-billing-add.component';
import { DecimalPipe } from '@angular/common';

@NgModule({
  imports: [ThemeModule],
  declarations: [StoBillingComponent, StoBillingAddComponent],
  // providers: [DecimalPipe],
})
export class STOBillingModule {}
