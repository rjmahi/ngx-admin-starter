import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';

  user: any = { name: '', picture: '' };

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserData,
    private analyticsService: AnalyticsService,
  ) {}

  ngOnInit() {
    this.user.name = '';
    this.user.picture = 'assets/images/nick.png';
    // this.userService
    //   .getUsers()
    //   .subscribe((users: any) => (this.user = users.nick));
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }
}
