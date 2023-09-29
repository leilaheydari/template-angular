import { SharedState } from './shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const SHARED_STATE_NAME = 'shared';
export const SET_TITLE = 'shared';

const getTitleState = createFeatureSelector<SharedState>(SET_TITLE);

export const getTitle = createSelector(getTitleState, (state) => {
  return state.Title;
});
