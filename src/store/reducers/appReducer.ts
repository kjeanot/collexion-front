import { createAction, createReducer } from "@reduxjs/toolkit";

interface AppState {
  showLogin: boolean;
}
export const initialState: AppState = {
  showLogin: false,
};

export const switchLoginDisplay = createAction("app/switchLoginDisplay");

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(switchLoginDisplay, (state) => {
    state.showLogin = !state.showLogin;
  });
});

export default appReducer;
