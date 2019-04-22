import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'STO List',
    icon: 'nb-compose',
    link: '/pages/sto/sto',
    home: true,
  },
  {
    title: 'Gate Out Pending',
    icon: 'nb-paper-plane',
    link: '/pages/sto/gateOut',
    home: true,
  },
  {
    title: 'Gate Out History',
    icon: 'nb-grid-b-outline',
    link: '/pages/sto/gateOutHistory',
    home: true,
  },
  {
    title: 'Goods Receipt Pending',
    icon: 'nb-angle-double-left',
    link: '/pages/sto/receive',
    home: true,
  },
  {
    title: 'Goods Receipt History',
    icon: 'nb-keypad',
    link: '/pages/sto/receiveHistory',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      // {
      //   title: 'Register',
      //   link: '/auth/register',
      // },
      // {
      //   title: 'Request Password',
      //   link: '/auth/request-password',
      // },
      // {
      //   title: 'Reset Password',
      //   link: '/auth/reset-password',
      // },
    ],
  },
];
