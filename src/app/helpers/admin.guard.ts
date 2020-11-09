import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate, CanLoad {
    constructor(
       private router: Router,
       private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const data = this.authenticationService.user;
        console.log(data);
        if (data) {
            if (data.role === '0') {
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

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        const data = this.authenticationService.user;
        if (data) {
            if (data.role === '0') {
                return true;
            }
        }
        return false;
      }
}