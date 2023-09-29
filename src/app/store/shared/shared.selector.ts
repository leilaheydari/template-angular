import { SharedState } from './shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const SHARED_STATE_NAME = 'shared';
export const SET_TITLE = 'shared';
export const SET_SHOW_NAVIGATION = 'shared';
export const SET_ACTION_NAVIGATION_PANEL = 'shared';
export const SET_ACTION_NAVIGATION_Mobile_PANEL = 'shared';
export const SET_ACTION_CLICK_OUT_SIDE = 'shared';

const getTitleState = createFeatureSelector<SharedState>(SET_TITLE);
const getShowNavigationState = createFeatureSelector<SharedState>(SET_SHOW_NAVIGATION);
const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);
const getNavigationPanelState = createFeatureSelector<SharedState>(SET_ACTION_NAVIGATION_PANEL);
const getNavigationMobilePanelState = createFeatureSelector<SharedState>(SET_ACTION_NAVIGATION_Mobile_PANEL);
const  getClickOutsideState = createFeatureSelector<SharedState>(SET_ACTION_CLICK_OUT_SIDE);


export const getTitle = createSelector(getTitleState, (state) => {
  return state.Title;
});

export const getShowNavigation = createSelector(getShowNavigationState, (state) => {
  return state.ShowNavigation;
});

export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});

export const getNavigationMobilePanel = createSelector(getNavigationMobilePanelState, (state) => {
  return state.showNavigationMobilePanel;
});

export const getNavigationPanel = createSelector(getNavigationPanelState, (state) => {
  return state.showNavigationPanel;
});

export const getClickOutside = createSelector (getClickOutsideState , (state) =>{
  return state.ClickOutside;
});

