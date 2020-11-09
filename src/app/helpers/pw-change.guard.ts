import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwChangeGuard implements CanActivate, CanLoad {
  constructor(
    private authenticationService: AuthenticationService,
    private location: Location
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const data = this.authenticationService.user.passwordUpdated;
      if (!data) {
        return true;
      }
      this.location.back();
      return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      const data = this.authenticationService.user;
      if (data) {
        return true;
      }
      return false;
  }
}
