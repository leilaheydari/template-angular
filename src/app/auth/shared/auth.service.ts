
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { AuthLogin } from './models/authLogin';
import { JWTDeCode } from './models/JWTDeCode';
import jwt_decode from "jwt-decode";
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';
  timeoutInterval: any;
  constructor(
    private readonly http: HttpClient,
    private store: Store<AppState>,
  ) { }

  login(data: AuthLogin): Observable<any> {
    // return this.http.post<any>(environment.apiUrl.concat(this.loginUrl), data)
    //   .pipe(
    //     tap(user => this.setUserInLocalStorage(user))
    //   )
    return of();
  }

  setUserInLocalStorage(user: any) {
    localStorage.setItem('userData', JSON.stringify(user.entries));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('userData') as string);
  }

  logout() {
    localStorage.removeItem('userData');
  }

  // signUp(mobile: any): Observable<any> {
  //   return this.http.post<any>(environment.apiUrl.concat(this.registerUrl), mobile)
  // }

  // isLoggedIn(): Observable<boolean> {
  //   const currentUser = this.getCurrentUser();
  //   if (currentUser != null) {
  //     const token = this.getDecodeToken(currentUser.token);
  //     const currentTime = Math.round((new Date()).getTime() / 1000);
  //     if (token.exp > currentTime) {
  //       return of(true);
  //     } else {
  //       this.store.dispatch(logout());
  //       return of(false);
  //     }
  //   }
  //   return of(false);
  // }



  getDecodeToken(token: string): JWTDeCode {
    return jwt_decode(token);
  }



}



