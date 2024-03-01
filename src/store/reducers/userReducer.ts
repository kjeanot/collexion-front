import {
  StateFromReducersMapObject,
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { ICollection, IRole, IUser } from '../../types/types';
import { RootState } from '..';
import api from '../../hooks/api';

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

interface userAlert {
  message: string;
  type: string;
}

interface UserState {
  loggedUser: loggedUser;
  currentUser: currentUser;
  userAlert: userAlert;
}

interface UploadedFile {
  name?: any;
}

export const initialState: UserState = {
  loggedUser: {
    id: undefined,
    nickname: undefined,
    email: undefined,
    roles: ['ROLE_USER'],
    password: undefined,
    description: undefined,
    picture: undefined,
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
  userAlert: {
    message: '',
    type: '',
  },
};

export const setEmail = createAction<string>('user/setUsername');
export const setPassword = createAction<string>('user/setPassword');
export const setNickname = createAction<string>('user/setNickname');
export const setPicture = createAction<string | File>('user/setPicture');
export const setRoles = createAction<IRole[]>('user/setRoles');
export const setUserDescription = createAction<string>(
  'user/setUserDescription'
);
export const logout = createAction('user/logout');

export const register = createAsyncThunk<StateFromReducersMapObject<any>>(
  'user/register',
  async (_, thunkAPI) => {
    // Retreive the state to pass the stored informations into the API request body
    const state = thunkAPI.getState() as RootState;

    const response = await api.post(
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

    const response = await api.post(
      `${import.meta.env.VITE_API_PATH}login_check`,
      {
        username: state.user.loggedUser.email,
        password: state.user.loggedUser.password,
      }
    );

    return response.data;
  }
);

export const userUpdate = createAsyncThunk<StateFromReducersMapObject<any>>(
  'user/userUpdate',
  async (_, thunkAPI) => {
    // Retreive the state to pass the stored informations into the API request body
    const state = thunkAPI.getState() as RootState;

    const response = await api.put(
      `${import.meta.env.VITE_API_PATH}secure/user/${state.user.loggedUser.id}`,
      {
        nickname: state.user.loggedUser.nickname,
        email: state.user.loggedUser.email,
        description: state.user.loggedUser.description,
        picture: state.user.loggedUser.picture,
        password: state.user.loggedUser.password,
      }
    );

    return response.data;
  }
);

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (id: number, thunkAPI) => {
    const response = await api.get(
      `${import.meta.env.VITE_API_PATH}user/${id}`
    );
    return response.data;
  }
);

export const addToFavorites = createAsyncThunk(
  'collections/addToFavorites',
  async (id: number, thunkAPI) => {
    const response = await api.post(
      `${import.meta.env.VITE_API_PATH}secure/add/${id}/favorite`,
      ''
    );

    return response.data;
  }
);

export const removeFromFavorites = createAsyncThunk(
  'collections/removeFromFavorites',
  async (id: number, thunkAPI) => {
    const response = await api.post(
      `${import.meta.env.VITE_API_PATH}secure/delete/${id}/favorite`,
      ''
    );

    return response.data;
  }
);

export const uploadUserImage = createAsyncThunk(
  'collections/uploadUserImage',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const formData = new FormData();
    formData.append('file', state.user.loggedUser.picture as Blob);
    state.user.loggedUser.picture.name &&
      formData.append(
        'fileName',
        state.user.loggedUser.picture.name as string | Blob
      );

    const response = await api.post(
      `${import.meta.env.VITE_API_PATH}secure/user/upload_file`,
      formData
    );

    return response.data;
  }
);

export const resetAlert = createAction('user/resetAlert');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(register.pending, (state, action) => {})
    .addCase(register.fulfilled, (state, action) => {
      console.log('register fulfilled', action);
      loginCheck();
    })
    .addCase(register.rejected, (state, action) => {
      console.log('register rejected', action);
    })
    .addCase(loginCheck.pending, (state, action) => {})
    .addCase(loginCheck.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.loggedUser.id = (action.payload as IUser).id;
      state.loggedUser.nickname = (action.payload as IUser).nickname;
      state.loggedUser.email = (action.payload as IUser).email;
      state.loggedUser.description = (action.payload as IUser).description;
      state.loggedUser.picture = (action.payload as IUser).picture;
      state.loggedUser.roles = (action.payload as IUser).roles;
      state.loggedUser.username = (action.payload as IUser).username;
      localStorage.setItem('jwt', JSON.stringify(action.payload.token));
      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${action.payload.token}`;
      state.userAlert.message = 'Login successful';
      state.userAlert.type = 'success';
    })
    .addCase(loginCheck.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(logout, (state, action) => {
      state.loggedUser = initialState.loggedUser;
      state.currentUser = initialState.currentUser;
      state.userAlert.message = 'Logout successful';
      state.userAlert.type = 'success';
      localStorage.removeItem('jwt');
      api.defaults.headers.common['Authorization'] = '';
    })
    .addCase(fetchUserInfo.pending, (state, action) => {})
    .addCase(fetchUserInfo.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.currentUser = action.payload;
      if (state.currentUser.id === state.loggedUser.id) {
        state.loggedUser.id = (action.payload as IUser).id;
        state.loggedUser.nickname = (action.payload as IUser).nickname;
        state.loggedUser.email = (action.payload as IUser).email;
        state.loggedUser.description = (action.payload as IUser).description;
        state.loggedUser.picture = (action.payload as IUser).picture;
        state.loggedUser.roles = (action.payload as IUser).roles;
        state.loggedUser.username = (action.payload as IUser).username;
        state.loggedUser.myfavoritescollections = action.payload.myfavoritescollections;
      }
    })
    .addCase(fetchUserInfo.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(addToFavorites.pending, (state, action) => {})
    .addCase(addToFavorites.fulfilled, (state, action) => {
      console.log('fav added successfully', action.payload);
      state.loggedUser.myfavoritescollections?.push(action.payload);
    })
    .addCase(addToFavorites.rejected, (state, action) => {
      console.log('fav add rejected');
    })
    .addCase(removeFromFavorites.pending, (state, action) => {})
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
    .addCase(uploadUserImage.pending, (state, action) => {})
    .addCase(uploadUserImage.fulfilled, (state, action) => {
      console.log('image uploaded successfully', action.payload);
      state.loggedUser.myfavoritescollections?.push(action.payload);
    })
    .addCase(uploadUserImage.rejected, (state, action) => {
      console.log('image upload rejected');
    })
    .addCase(setEmail, (state, action) => {
      state.loggedUser.username = action.payload;
      state.loggedUser.email = action.payload;
    })
    .addCase(setPassword, (state, action) => {
      state.loggedUser.password = action.payload;
    })
    .addCase(setNickname, (state, action) => {
      state.loggedUser.nickname = action.payload;
    })
    .addCase(setPicture, (state, action) => {
      state.loggedUser.picture = action.payload;
    })
    .addCase(setRoles, (state, action) => {
      state.loggedUser.roles = action.payload;
    })
    .addCase(setUserDescription, (state, action) => {
      state.loggedUser.description = action.payload;
    })
    .addCase(userUpdate.pending, (state, action) => {})
    .addCase(userUpdate.fulfilled, (state, action) => {
      console.log('user updated successfully', action.payload);
      state.userAlert.message = 'User updated successfully';
      state.userAlert.type = 'success';
    })
    .addCase(userUpdate.rejected, (state, action) => {
      console.log('user update rejected');
      state.userAlert.message = 'User update rejected';
      state.userAlert.type = 'error';
    })
    .addCase(resetAlert, (state, action) => {
      state.userAlert.message = '';
      state.userAlert.type = '';
    });
});

export default userReducer;
