import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinadorGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
 ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const data = this.authenticationService.user;
      if (data) {
          if (data.role === '2') {
            if (data.passwordUpdated) {
              return true;
            }
            else {
              this.router.navigate(['/pw-change']);
              return false;
            }
          }
      }
      // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      this.router.navigate(['/admin']);
      return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      const data = this.authenticationService.user;
      if (data) {
          if (data.role === '2') {
              return true;
          }
      }
      return false;
  }
}
