import {
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
);

export function SharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}

