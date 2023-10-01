import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';
export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getAuth = createSelector(getAuthState, (state) => {
  return state.user;
});

export const getAuthCurrentShop = createSelector(getAuthState, (state) => {
  return state.user.current_shop;
});

export const getAuthUser = createSelector(getAuthState, (state) => {
  return state.user.user;
});

export const getAuthShopsList = createSelector(getAuthState, (state) => {
  return state.user.shops_list;
});
