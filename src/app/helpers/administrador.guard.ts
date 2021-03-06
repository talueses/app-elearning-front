import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private location: Location
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const data = this.authenticationService.user;
      console.log(data);
      if (data) {
        if (data.role === '1') {
          if (data.passwordUpdated) {
            return true;
          }
          else {
            this.router.navigate(['/pw-change']);
            return false;
          }
        }
        if (data.role === '4'){
          this.router.navigate(['/alumno']);
          return false;
        }
        else{
          this.router.navigate(['/admin']);
          return false;
        }
      }
      else{
        this.router.navigate(['/admin']);
        return false;
      }
      // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      const data = this.authenticationService.user;
      if (data) {
        if (data.role === '1') {
            return true;
        }
      }
      return false;
  }
}
