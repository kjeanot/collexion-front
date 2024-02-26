import {
  StateFromReducersMapObject,
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { ICollection, IRole, IUser } from '../../types/types';
import { RootState } from '..';

interface loggedUser {
  id?: number;
  nickname?: string;
  username?: string;
  picture?: any;
  email?: string;
  roles?: IRole[];
  description?: null | string;
  token?: string;
  password?: string;
  mycollections?: ICollection[];
  myfavoritescollections?: ICollection[];
  isUserlogged: boolean;
}

interface currentUser {
  id?: number;
  nickname?: string;
  username?: string;
  picture?: null | string;
  email?: string;
  roles?: IRole[];
  description?: null | string;
  mycollections?: ICollection[];
}

interface UserState {
  loggedUser: loggedUser;
  currentUser: currentUser;
}

interface UploadedFile {
  name?: any;
}

export const initialState: UserState = {
  loggedUser: {
    id: undefined,
    token: undefined,
    nickname: undefined,
    email: undefined,
    roles: ['ROLE_USER'],
    password: undefined,
    description: undefined,
    picture: undefined,
    isUserlogged: false,
    mycollections: undefined,
    myfavoritescollections: undefined,
  },
  currentUser: {
    id: undefined,
    nickname: undefined,
    email: undefined,
    roles: ['ROLE_USER'],
    description: undefined,
    picture: undefined,
    mycollections: undefined,
  },
};

const storedToken = localStorage.getItem('jwt');
const token = storedToken ? JSON.parse(storedToken) : '';

export const setEmail = createAction<string>('user/setUsername');
export const setPassword = createAction<string>('user/setPassword');
export const setNickname = createAction<string>('user/setNickname');
export const setPicture = createAction<string | File>('user/setPicture');
export const setRoles = createAction<IRole[]>('user/setRoles');
export const setUserDescription = createAction<string>(
  'user/setUserDescription'
);

export const register = createAsyncThunk<StateFromReducersMapObject<any>>(
  'user/register',
  async (_, thunkAPI) => {
    // Retreive the state to pass the stored informations into the API request body
    const state = thunkAPI.getState() as RootState;

    const response = await axios.post(
      `${import.meta.env.VITE_API_PATH}register`,
      {
        nickname: state.user.loggedUser.nickname,
        email: state.user.loggedUser.email,
        password: state.user.loggedUser.password,
      }
    );
    return response.data;
  }
);

export const loginCheck = createAsyncThunk<StateFromReducersMapObject<any>>(
  'user/login_check',
  async (_, thunkAPI) => {
    // Retreive the state to pass the stored informations into the API request body
    const state = thunkAPI.getState() as RootState;

    const response = await axios.post(
      `${import.meta.env.VITE_API_PATH}login_check`,
      {
        username: state.user.loggedUser.email,
        password: state.user.loggedUser.password,
      }
    );

    return response.data;
  }
);

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (id: number, thunkAPI) => {
    if (token) {
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
  }
);

export const addToFavorites = createAsyncThunk(
  'collections/addToFavorites',
  async (id: number, thunkAPI) => {
    if (token) {
      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}secure/add/${id}/favorite`,
        '',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'collections/removeFromFavorites',
  async (id: number, thunkAPI) => {
    if (token) {
      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}secure/delete/${id}/favorite`,
        '',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    }
  }
);

export const uploadUserImage = createAsyncThunk(
  'collections/uploadUserImage',
  async (_, thunkAPI) => {
    if (token) {
      const state = thunkAPI.getState() as RootState;

      const formData = new FormData();
      formData.append('file', state.user.loggedUser.picture as Blob);
      state.user.loggedUser.picture.name &&
        formData.append(
          'fileName',
          state.user.loggedUser.picture.name as string | Blob
        );

      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}secure/user/upload_file`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    }
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(register.pending, (state, action) => {
      console.log('register pending', action);
    })
    .addCase(register.fulfilled, (state, action) => {
      console.log('register fulfilled', action);
      loginCheck();
    })
    .addCase(register.rejected, (state, action) => {
      console.log('register rejected', action);
    })
    .addCase(loginCheck.pending, (state, action) => {
      console.log('pending', action);
      localStorage.removeItem('jwt');
    })
    .addCase(loginCheck.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.loggedUser.id = (action.payload as IUser).id;
      state.loggedUser.nickname = (action.payload as IUser).nickname;
      state.loggedUser.email = (action.payload as IUser).email;
      state.loggedUser.description = (action.payload as IUser).description;
      state.loggedUser.picture = (action.payload as IUser).picture;
      state.loggedUser.roles = (action.payload as IUser).roles;
      state.loggedUser.token = (action.payload as IUser).token;
      state.loggedUser.username = (action.payload as IUser).username;
      localStorage.setItem('jwt', JSON.stringify(state.loggedUser.token));
      localStorage.setItem('uid', JSON.stringify(state.loggedUser.id));
      state.loggedUser.isUserlogged = true;
    })
    .addCase(loginCheck.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(fetchUserInfo.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(fetchUserInfo.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.currentUser = action.payload;
      state.currentUser.id === state.loggedUser.id
        ? (state.loggedUser = action.payload)
        : '';
      console.log(state.currentUser.mycollections);
    })
    .addCase(fetchUserInfo.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(addToFavorites.pending, (state, action) => {
      console.log('fav add pending');
    })
    .addCase(addToFavorites.fulfilled, (state, action) => {
      console.log('fav added successfully', action.payload);
      state.loggedUser.myfavoritescollections?.push(action.payload);
    })
    .addCase(addToFavorites.rejected, (state, action) => {
      console.log('fav add rejected');
    })
    .addCase(removeFromFavorites.pending, (state, action) => {
      console.log('fav remove pending');
    })
    .addCase(removeFromFavorites.fulfilled, (state, action) => {
      console.log('fav removed successfully', action.payload);
      state.loggedUser.myfavoritescollections =
        state.loggedUser.myfavoritescollections?.filter(
          (el) => el.id != action.payload.id
        );
    })
    .addCase(removeFromFavorites.rejected, (state, action) => {
      console.log('fav remove rejected');
    })
    .addCase(uploadUserImage.pending, (state, action) => {
      console.log('image upload pending');
    })
    .addCase(uploadUserImage.fulfilled, (state, action) => {
      console.log('image uploaded successfully', action.payload);
      state.loggedUser.myfavoritescollections?.push(action.payload);
    })
    .addCase(uploadUserImage.rejected, (state, action) => {
      console.log('image upload rejected');
    })
    .addCase(setEmail, (state, action) => {
      console.log('new username :', action.payload);
      state.loggedUser.username = action.payload;
      state.loggedUser.email = action.payload;
    })
    .addCase(setPassword, (state, action) => {
      console.log('new password :', action.payload);
      state.loggedUser.password = action.payload;
    })
    .addCase(setNickname, (state, action) => {
      state.loggedUser.nickname = action.payload;
    })
    .addCase(setPicture, (state, action) => {
      state.loggedUser.picture = action.payload;
      console.log(action);
    })
    .addCase(setRoles, (state, action) => {
      state.loggedUser.roles = action.payload;
    })
    .addCase(setUserDescription, (state, action) => {
      state.loggedUser.description = action.payload;
    });
});

export default userReducer;
