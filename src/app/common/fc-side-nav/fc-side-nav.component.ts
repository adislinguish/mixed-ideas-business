import { Component, input, signal, viewChild } from '@angular/core';
import { FcSideNavService } from './fc-side-nav.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FcMenuList } from '../fc-menu/fc-menu-model';
import { Data, IsActiveMatchOptions, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'fc-side-nav',
  templateUrl: './fc-side-nav.component.html',
  styleUrl: './fc-side-nav.component.scss',
  imports: [
    MatIconModule, 
    MatButtonModule, 
    MatTooltipModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterLink, 
    RouterLinkActive, 
    RouterOutlet
  ],
  providers: [
    FcSideNavService
  ]
})
export class FcSideNavComponent {

  fillerNav = input.required<FcMenuList[]>();

  snav = viewChild(MatSidenav);   

  protected readonly routeMatchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'subset',
    fragment: 'exact',
    matrixParams: 'ignored'
  };

  //protected queryParams: Data;

  //sideNavService: FcSideNavService = inject(FcSideNavService);

  protected readonly fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  protected readonly isMobile = signal(false);

  //private readonly _mobileQuery: MediaQueryList;
  //private readonly _mobileQueryListener: () => void;

  constructor() {
    // const media = inject(MediaMatcher);

    // this._mobileQuery = media.matchMedia('(max-width: 600px)');
    // this.isMobile.set(this._mobileQuery.matches);
    // this._mobileQueryListener = () => this.isMobile?.set(this._mobileQuery.matches);
    // this._mobileQuery?.addEventListener('change', this._mobileQueryListener);
  }

  public openSideBar(): void {
    this.snav()?.toggle();
  }

  ngOnDestroy(): void {
    //this._mobileQuery?.removeEventListener('change', this._mobileQueryListener);
  }
}
