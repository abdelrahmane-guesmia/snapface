import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Snapface';
  items: MenuItem[] = [];
  activeItem: MenuItem = {};
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      {
        label: 'Facesnap',
        icon: 'pi pi-fw pi-table',
        routerLink: '/facesnaps',
      },
      { label: 'About', icon: 'pi pi-fw pi-info-circle', routerLink: '/about' },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-question-circle',
        routerLink: '/contact',
      },
      { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: '/login' },
      {
        label: 'Sign up',
        icon: 'pi pi-fw pi-user-plus',
        routerLink: '/signup',
      },
    ];
    this.activeItem = this.items[0];
  }
}
