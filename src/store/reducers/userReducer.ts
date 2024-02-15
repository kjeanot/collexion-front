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
      `http://ec2-16-170-215-204.eu-north-1.compute.amazonaws.com/index.php/api/login_check`,
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
