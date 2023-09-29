import {
  setClickOutside,
  setLoadingSpinner,
  setNavigationMobilePanel,
  setNavigationPanel,
  setTitle,
} from './shared.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './shared.state';

const _sharedReducer = createReducer(
  initialState,
  on(setTitle, (state: any, action: any) => {
    return {
      ...state,
      Title: action.status,
    };
  }),
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setNavigationPanel, (state: any, action: any) => {
    return {
      ...state,
      showNavigationPanel: action.status,
    };
  }),
  on(setNavigationMobilePanel, (state: any, action: any) => {
    return {
      ...state,
      showNavigationMobilePanel: action.status,
    };
  }),
  on(setClickOutside, (state: any, action: any) => {
    return {
      ...state,
      ClickOutside: action.status,
    };
  }),
);

export function SharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}

