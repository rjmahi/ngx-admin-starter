import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  NbLoginComponent,
  NbAuthService,
  NB_AUTH_OPTIONS,
  NbAuthResult,
} from '@nebular/auth';
import { StoApiAccessService } from '../../../services/sto-api-access.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLoginComponent extends NbLoginComponent {
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  isLoggedIn = localStorage.getItem('login') === 'true' ? true : false;
  userName: string;
  userPassword: string;

  constructor(
    public api: StoApiAccessService,
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
  ) {
    super(service, options, cd, router);
    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');

    if (
      this.isLoggedIn !== null &&
      this.isLoggedIn !== undefined &&
      this.isLoggedIn
    ) {
      this.router.navigate(['/home']);
    }
  }
  @ViewChild('form') form: NgForm;

  login() {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.api
      .checkUserExists(this.userName, this.userPassword)
      .subscribe(res => {
        this.submitted = false;

        if (res != null) {
          if (res) {
            this.messages = ['Login success.'];
            localStorage.setItem('login', 'true');
            localStorage.setItem('user', this.userName);
            this.router.navigate(['/home']);
          } else {
            this.errors = ['Invalid credentials entered.'];
            this.form.resetForm({});
          }
        }
      });
  }
}
