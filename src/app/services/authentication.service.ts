import { Injectable, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    token: string;
    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
        if (localStorage.getItem('token')){
            this.token = JSON.parse(localStorage.getItem('token'));
            this.user = jwt_decode(localStorage.getItem('token'));
        }
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('token')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    login(email: string, password: string): any {
        return this.http.post<any>(`${environment.apiUrl}/api/v1/auth/login`, { email, password })
            .pipe(map(user => {
                this.token = user.data.token;
                localStorage.setItem('token', JSON.stringify(user.data.token));
                this.currentUserSubject.next(user);
                this.user = jwt_decode(this.currentUserSubject.value['data'].token);
                // console.log(this.currentUserSubject.value['data'].token);
                return user;
            }));
    }

    loginAdmin(email: string, password: string): any {
        return this.http.post<any>(`${environment.apiUrl}/api/v1/auth/login-admin`, { email, password })
            .pipe(map(user => {
                this.token = user.data.token;
                localStorage.setItem('token', JSON.stringify(user.data.token));
                this.currentUserSubject.next(user);
                this.user = jwt_decode(this.currentUserSubject.value['data'].token);
                // console.log(this.currentUserSubject.value['data'].token);
                return user;
            }));
    }

    logout(user = 'admin'): void {
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
        this.user = null;
        this.token = null;
        if (user === 'alumno'){
            this.router.navigate(['/']);
        }
        else {
            this.router.navigate(['/admin']);
        }
    }

    passwordResetToken(email: string): any {
        return this.http.post<any>(`${environment.apiUrl}/api/v1/users/forgot-password`, {email})
        .pipe(map(res => {
            return res;
        }));
       //return this.sendPasswordResetEmail(Email_User);
    }
    verifyResetToken(token: string): any {
        return this.http.post<any>(`${environment.apiUrl}/api/v1/users/validate-reset-token`, {token})
        .pipe(map(res => {
            return res;
        }));
    }
    updatePassword(password: string, token: string): any {
        return this.http.post<any>(`${environment.apiUrl}/api/v1/users/reset-password`, {password, token})
        .pipe(map(res => {
            return res;
        }));
    }
}
