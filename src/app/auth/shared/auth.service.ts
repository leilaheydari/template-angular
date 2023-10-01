
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { AuthLogin } from './models/authLogin';
import { JWTDeCode } from './models/JWTDeCode';
import jwt_decode from "jwt-decode";
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { logout } from '../store/auth.actions';
import { setButtonLoading } from 'src/app/store/shared/shared.actions';

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
    const result = {
      "returns": {
        "status": 200,
        "message": "عملیات با موفقیت انجام شد."
      },
      "entries": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkX2RhdGEiOiIrWmptY2MvQzMxZXBTK0QzeUNBdlRJZGdvRGlHOUI3LzhSTXh2Nis1U1lsemN4SklkaVZhTi9JNkc5UFRDZDJiRTdhMnJ5WVdzWlZlTFBRY3hxblVJR0ZhVHFnRUo2SThYOWRnVWdQbzBFNTBua3ZvVGgxS20zNzZ1cjNtV1B2SXFrWjc5NTBZY0NjdVdFRm5ucEdHbWJBUFpRWHp3MENQTjdDdmJDelV6aVpTNXcwcE1mbnJEc2tab3F6LzFzVXZtdVoyOFY0M0hqc2kvdnBqMlZJR1FSaGdCTVVYZDFRMEZYSGdHV05qZFk0PSIsImV4cCI6MTY5NTYyNzAyNywib3JpZ19pYXQiOjE2OTU1NDA2Mjd9.KU30E1FHUj1gn2T_1LElUJoIpcUqDhJixrFGORq21O4",
        "current_shop": {
          "id": "98674d13-ffba-492c-bb6b-3fc514bddf07",
        },
        "user": {
          "user_type": 20,
          "code": -1,
          "mobile": "09391259423",
          "username": "09391259423",
          "email": "leila@exmpale.com",
          "first_name": "لیلا",
          "last_name": "حیدری"
        }
      }
    }
    this.setUserInLocalStorage(result)
    return of(result)
  }


  validToken(): boolean {
    const currentUser = this.getCurrentUser();
    if (currentUser.token) {
      return true
    }
    else {
      return false
    }
  }

  setUserInLocalStorage(user: any) {
    localStorage.setItem('userData', JSON.stringify(user.entries));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('userData') as string);
  }

  logout() {
    this.store.dispatch(setButtonLoading({ status: false }));
    localStorage.removeItem('userData');
  }

  isLoggedIn(): Observable<boolean> {
    const currentUser = this.getCurrentUser();
    if (currentUser != null) {
      const token = this.getDecodeToken(currentUser.token);
      const currentTime = Math.round((new Date()).getTime() / 1000);
      if (token.exp > currentTime) {
        return of(true);
      } else {
        this.store.dispatch(logout());
        return of(true);
      }
    }
    return of(true);
  }

  isShopId(): Observable<boolean> {
    const currentUser = this.getCurrentUser();
    if (currentUser != null) {
      if (currentUser['current_shop']['id'] === null) {
        return of(false)
      }
      else {
        return of(true)
      }
    }
    return of(false);
  }

  getDecodeToken(token: string): JWTDeCode {
    return jwt_decode(token);
  }

}


