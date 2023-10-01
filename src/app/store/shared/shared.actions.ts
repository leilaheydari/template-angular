import { createAction, props } from '@ngrx/store';
export const SET_TITLE = '[shared] set title page';
export const SET_SHOW_NAVIGATION = '[shared] set show nanigation';
export const SET_LOADING_ACTION = '[shared] set loading spinner';
export const SET_ACTION_NAVIGATION_PANEL = '[shared] set show navigation panel';
export const SET_ACTION_NAVIGATION_MOBILE_PANEL = '[shared] set show navigation mobile panel';
export const SET_ACTION_CLICK_OUT_SIDE = '[shared] set click out side';
export const SET_BUTTON_LOADING = '[shared] set button spinner';


export const setTitle = createAction(
  SET_TITLE, props<{ status: {} }>());

export const setShowNavigation = createAction(
  SET_SHOW_NAVIGATION, props<{ status: boolean }>());

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION, props<{ status: boolean }>());

export const setNavigationPanel = createAction(
  SET_ACTION_NAVIGATION_PANEL, props<{ status: number }>());

export const setNavigationMobilePanel = createAction(
  SET_ACTION_NAVIGATION_MOBILE_PANEL, props<{ status: number }>());

export const setClickOutside = createAction(
  SET_ACTION_CLICK_OUT_SIDE, props<{ status: string }>());

export const setButtonLoading = createAction(
    SET_BUTTON_LOADING, props<{ status: boolean }>());
