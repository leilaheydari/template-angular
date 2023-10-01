export interface SharedState {
  Title: {
    'title': string
  };
  ShowNavigation: boolean;
  showLoading: boolean;
  showNavigationPanel: number;
  showNavigationMobilePanel: number;
  ClickOutside: string;
  ButtonLoading: boolean,
}

export const initialState: SharedState = {
   Title: {
    'title': 'dashboard'
  },
  ShowNavigation: false,
  showLoading: false,
  showNavigationPanel: 2,
  showNavigationMobilePanel: 0,
  ClickOutside: 'outside',
  ButtonLoading: false,
};

