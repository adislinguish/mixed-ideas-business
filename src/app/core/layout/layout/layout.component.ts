import { Component } from '@angular/core';
import { FcSideNavComponent } from '../../../common/fc-side-nav/fc-side-nav.component';
import { FcMenuComponent } from '../../../common/fc-menu/fc-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FcMenuList } from '../../../common/fc-menu/fc-menu-model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [
    FcSideNavComponent,
    FcMenuComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class LayoutComponent {

  menuList = [
    {
      id: '1',
      title: 'Send Money',
      children: [
        {
          id:'1.1',
          title: 'Cash',
          children: []
        },
        {
          id:'1.2',
          title: 'Card',
          children: []
        }
      ]
    },
    {
      id: '2',
      title: 'Pick up Cash',
      children: [
        {
          id:'2.1',
          title: 'In Person',
          children: []
        },
        {
          id:'2.2',
          title: 'By mail',
          children: []
        }
      ]
    }
  ];

  fillerNav: FcMenuList[] = [
    {
      id: '1',
      title: 'Wedding Dresses',
      url: 'dresses'
    },
    {
      id: '2',
      title: 'Accessories',
    }, 
    {
      id: '3',
      title: 'Venues',
      url: 'fc-checkbox'
    },
    {
      id: '4',
      title: 'Events',
      url: 'concurrency'
    },
    {
      id: '5',
      title: 'Appointments',
      url: 'appointments'
    },
    {
      id: '6',
      title: 'Games',
      url: 'games'
    }
  ];

  public openSideBar(): void {

  }

}
