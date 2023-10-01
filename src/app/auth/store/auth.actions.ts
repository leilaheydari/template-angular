
import { createAction, props } from '@ngrx/store';
import { AuthLogin } from '../shared/models/authLogin';
import { AuthSingup } from '../shared/models/authSingup';
export const LOGIN_START = '[auth] login start';
export const LOGIN_SUCCESS = '[auth] login Success';
export const SIGNUP_START = '[auth] signup start';
export const SIGNUP_SUCCESS = '[auth] signup success';
export const L0GOUT_ACTION = '[auth] logout';
export const L0GOUT_SUCCESS = '[auth] logout success';
export const AUTO_LOGIN_ACTION = '[auth] auto login';

export const loginStart = createAction(
  LOGIN_START, props<{ status: AuthLogin }>());

export const loginSuccess = createAction(
  LOGIN_SUCCESS, props<{ user: any, redirect: boolean }>());

  export const signupStart = createAction(
    SIGNUP_START, props<{  status: AuthSingup }>()
  );

  export const signupSuccess = createAction(
    SIGNUP_SUCCESS, props<{ user: any , redirect: boolean }>()
  );

  export const logout = createAction(
    L0GOUT_ACTION
  );

  export const logOutSuccess = createAction(
    L0GOUT_SUCCESS, props<{ user: any}>()
  );

  export const autoLogin = createAction(AUTO_LOGIN_ACTION);
