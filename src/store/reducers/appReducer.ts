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
export const closeModal = createAction('app/closeModal');

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(switchLoginDisplay, (state) => {
    state.showLogin = !state.showLogin;
  });
  builder.addCase(switchModalDisplay, (state) => {
    state.showModal = !state.showModal;
  })
  builder.addCase(closeModal, (state) => {
    state.showModal = false;
  });
});

export default appReducer;
