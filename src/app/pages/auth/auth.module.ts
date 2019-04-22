import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule,
  NbCardModule,
} from '@nebular/theme';
import { NgxLoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbAuthModule,
  ],
  declarations: [NgxLoginComponent, AuthComponent],
})
export class NgxAuthModule {}
