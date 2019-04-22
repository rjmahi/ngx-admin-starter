import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbMenuService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(
    private menuService: NbMenuService,
    protected router: Router,
    private analytics: AnalyticsService,
  ) {
    this.menuService.onItemClick().subscribe(event => {
      this.onContecxtItemSelection(event.item.title);
    });
  }

  ngOnInit() {
    this.analytics.trackPageViews();
  }

  onContecxtItemSelection(title) {
    if (title === 'Log out') {
      localStorage.setItem('login', 'false');
      localStorage.setItem('user', '');
      this.router.navigate(['/auth/login']);
    }
  }
}
