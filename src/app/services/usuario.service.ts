import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/models/user';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  users$: Observable<User[]>;
  users: Observable<User[]>;

  constructor(
    private http: HttpClient
  ) {
    this.users$ = this.http.get<User[]>(`${environment.apiUrl}/api/v1/users`)
    .pipe(map( res => {
      return res;
    }));
  }
  createUser(user: User): any {
    return this.http.post<User>(`${environment.apiUrl}/api/v1/users`, user)
    .pipe(map( res => {
      return res;
    }));
  }

  getUsers() {
    return this.users$;
  }

  getUser(id: string): any {
    return this.http.get<User>(`${environment.apiUrl}/api/v1/users/${id}`)
    .pipe(map( res => {
      return res;
    }));
    // this.users$ = this.http.get<User[]>(`${environment.apiUrl}/api/v1/users/${id}`)
    // .pipe(map( res => {
      //   return res;
    // }));
    // tslint:disable-next-line: deprecation
    // return this.users$.pipe(map((user) => {
      //   let u = user.filter(u => u.Id_User === Number(id));
      //   return (u.length > 0) ? u[0] : null;
      // }));
  }

  updateProfile(user: User): any {
    return this.http.put<User>(`${environment.apiUrl}/api/v1/users/update-profile`, user)
    .pipe(map( res => {
      return res;
    }));
  }
  deleteUser(id: string): any {
    return this.http.delete<User>(`${environment.apiUrl}/api/v1/users/${id}`)
    .pipe(map(res => res));
  }

  updateFirstPassword(id: string, password: string, newPassword: string ): any {
    return this.http.post<any>(`${environment.apiUrl}/api/v1/users/update-first-password`, {id, password, newPassword})
        .pipe(map(res => {
            return res;
        }));
  }
}
