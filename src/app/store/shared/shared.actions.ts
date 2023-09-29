import { createAction, props } from '@ngrx/store';
export const SET_TITLE = '[shared] set title page';

export const setTitle = createAction(
  SET_TITLE, props<{ status: {} }>());
