import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private toastr: ToastrService,
        private authenticationService: AuthenticationService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authenticationService.logout();
            }
            const data = this.authenticationService.user;

            if (err.status === 400) {
                if (data){
                    if (Date.now() / 1000 > data.exp){
                        console.log(Date.now() / 1000);
                        this.toastr.error(err['message']);
                        this.authenticationService.logout();
                    }
                }
            //     this.toastr.error(err['message']);
            //     this.authenticationService.logout();
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}