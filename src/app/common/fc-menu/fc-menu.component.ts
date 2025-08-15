import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FcMenuList } from './fc-menu-model';

@Component({
  selector: 'fc-menu',
  templateUrl: './fc-menu.component.html',
  styleUrl: './fc-menu.component.scss',
  imports: [
    MatButtonModule, 
    MatMenuModule
  ],
})
export class FcMenuComponent {
  menuList = input.required<FcMenuList[]>();
}