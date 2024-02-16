import { createAction, createReducer } from '@reduxjs/toolkit';

interface AppState {
  showLogin: boolean;
  showModal: boolean;
}
export const initialState: AppState = {
  showLogin: false,
  showModal: false,
};

export const switchLoginDisplay = createAction('app/switchLoginDisplay');
export const switchModalDisplay = createAction('app/switchModalDisplay');

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(switchLoginDisplay, (state) => {
    state.showLogin = !state.showLogin;
  });
  builder.addCase(switchModalDisplay, (state) => {
    state.showModal = !state.showModal;
  });
});

export default appReducer;