import {
  StateFromReducersMapObject,
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '..';
import { IRole, IUser } from '../../types/types';

export const initialState: IUser = {
  id: undefined,
  token: undefined,
  nickname: undefined,
  email: undefined,
  roles: ['ROLE_USER'],
  password: undefined,
  description: undefined,
  picture: undefined,
};

export const setEmail = createAction<string>('user/setUsername');
export const setPassword = createAction<string>('user/setPassword');
export const setNickname = createAction<string>('user/setNickname');
export const setPicture = createAction<string>('user/setPicture');
export const setRoles = createAction<IRole[]>('user/setRoles');
export const setUserDescription = createAction<string>('user/setUserDescription');

export const loginCheck = createAsyncThunk<StateFromReducersMapObject<any>>(
  'user/login_check',
  async (_, thunkAPI) => {
    // Retreive the state to pass the stored informations into the API request body
    const state = thunkAPI.getState() as RootState;
    const token = JSON.parse(localStorage.getItem('jwt') ?? '');

    const response = await axios.post(
      `${import.meta.env.VITE_API_PATH}login_check`,
      {
        username: state.user.email,
        password: state.user.password,
      }
    );
    return response.data;
  }
);

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (id: number, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem('jwt') ?? '');
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginCheck.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(loginCheck.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state = action.payload;
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.setItem(
        'jwt',
        JSON.stringify(action.payload.token)
      )}`;
    })
    .addCase(loginCheck.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(setEmail, (state, action) => {
      console.log('new username :', action.payload);
      state.username = action.payload;
      state.email = action.payload;
    })
    .addCase(setPassword, (state, action) => {
      console.log('new password :', action.payload);
      state.password = action.payload;
    })
    .addCase(setNickname, (state, action) => {
      state.nickname = action.payload;
    })
    .addCase(setPicture, (state, action) => {
      state.picture = action.payload;
    })
    .addCase(setRoles, (state, action) => {
      state.roles = action.payload;
    })
    .addCase(setUserDescription, (state, action) => {
      state.description = action.payload;
    });
});

export default userReducer;
