import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';

interface userState {
  username: null | string;
  password: null | string;
}
export const initialState: userState = {
  username: null,
  password: null,
};

export const login = createAsyncThunk(
  'user/login_check',
  async (_, thunkAPI) => {
    const response = await axios.post(
      `http://64ed31429cbded49acab4281.cloud.lan/Apothéose/collexion/projet-12-collexion-back/public/api/login_check`,
      {
        username: 'admin@admin.com',
        password: 'admin',
      }
    );
    return response.data;
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(login.fulfilled, (state, action) => {
      console.log('fulfilled', action);
    })
    .addCase(login.rejected, (state, action) => {
      console.log('rejected', action);
    });
});

export default userReducer;
