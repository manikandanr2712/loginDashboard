import { UtilService } from './../_services/util.service';
import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Breakpoints, BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { map, filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  navItems: Object = [
    { path: '/buy', text: 'Buy', active: false },
    { path: '/rent', text: 'Rent', active: false },
    { path: '/sell', text: 'Sell', active: false },
    { path: '/mortgages', text: 'Mortgages', active: false }
  ];
  currentUser: User;
  isAuthorized = false;
  navExpand = false;
  
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,    
  private breakpointObserver: BreakpointObserver,
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(res => {
      if (this.router.url === '/buy' || this.router.url === '/rent') {
        this.navExpand = true;
      } else {
        this.navExpand = false;
      }
    });
}

logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
 
}
mobileQuery: MediaQueryList;

private _mobileQueryListener: () => void;

ngOnDestroy(): void {
  this.mobileQuery.removeListener(this._mobileQueryListener);
}

}