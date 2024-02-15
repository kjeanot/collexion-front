import {
  StateFromReducersMapObject,
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '..';

interface userState {
  credentials: {
    username: null | string;
    password: null | string;
  };
  token: unknown | null | string;
  id: null | number;
}
export const initialState: userState = {
  credentials: {
    username: null,
    password: null,
  },
  id: null,
  token: null,
};

export const setUsername = createAction<string>('user/setUsername');
export const setPassword = createAction<string>('user/setPassword');
export const login = createAsyncThunk<StateFromReducersMapObject<any>>(
  'user/login_check',
  async (_, thunkAPI) => {
    // Retreive the state to pass the stored informations into the API request body
    const state = thunkAPI.getState() as RootState;

    const response = await axios.post(
      `${import.meta.env.VITE_API_PATH}login_check`,
      state.user.credentials
    );
    return response.data;
  }
);
export const fetchUserInfo = createAsyncThunk<StateFromReducersMapObject<any>>(
  'user/fetchUserInfo',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}${state.user.id}`
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
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.setItem('jwt', JSON.stringify(action.payload.token))}`;
      console.log(localStorage.getItem('jwt'));
      
    })
    .addCase(login.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(setUsername, (state, action) => {
      console.log('new username :', action.payload);
      state.credentials.username = action.payload;
    })
    .addCase(setPassword, (state, action) => {
      console.log('new password :', action.payload);
      state.credentials.password = action.payload;
    });
});

export default userReducer;
