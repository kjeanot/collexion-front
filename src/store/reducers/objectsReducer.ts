import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { CurrentObject, IComment, IObject } from '../../types/types';
import axios from 'axios';
import { RootState } from '..';
import { NavigateFunction } from 'react-router-dom';

interface ObjectsState {
  list: IObject[];
  currentObject: CurrentObject;
  comments:IComment[];
}

export const initialState: ObjectsState = {
  list: [],
  currentObject: {},
  comments:[]
};

const token = JSON.parse(localStorage.getItem('jwt') ?? '');
/**
 * Middleware for fetching all the objects
 *
 * Uses axios to request the /api/objects route and get all the object from the API.
 *
 * @return {Promise} Return a promise with objects when fulfilled.
 */
export const fetchObjects = createAsyncThunk(
  'objects/fetchObjects',
  async (_, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem('jwt') ?? '');
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}objects`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

/**
 * Middleware for fetching all comments
 *
 * Uses axios to request the /api/comments route and get all the comments from the API.
 *
 * @return {Promise} Return a promise with comments when fulfilled.
 */
export const fetchComments = createAsyncThunk(
  'objects/fetchComments',
  async (_, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem('jwt') ?? '');
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}comments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);



// Middlewares for a single Object CRUD

export const fetchSingleObject = createAsyncThunk(
  'objects/fetchSingleObject',
  async (id: number, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}object/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const deleteObject = createAsyncThunk(
  'objects/deleteObject',
  async (id: number, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_PATH}object/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }
);

export const updateObject = createAsyncThunk(
  'objects/updateObject',
  async (id: number, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axios.put(
      `${import.meta.env.VITE_API_PATH}object/update/${id}`,
      state.objects.currentObject,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }
);

export const postObject = createAsyncThunk(
  'objects/postObject',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axios.post(
      `${import.meta.env.VITE_API_PATH}object/create`,
      state.objects.currentObject,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }
);

export const resetCurrentObject = createAction(
  'objects/resetCurrentObject'
);
export const setObjectName = createAction<string>(
  'object/setObjectName'
);
export const setObjectDescription = createAction<string>(
  'object/setObjectDescription'
);
export const setObjectImage = createAction<string>(
  'object/setObjectImage'
);
export const setObjectId = createAction<number>(
  'object/setObjectId'
);
export const setObjectState = createAction<string>(
  'object/setObjectState'
);
export const setObjectCategory = createAction<string>(
  'object/setObjectCategory'
);

const objectsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchObjects.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(fetchObjects.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.list = action.payload;
    })
    .addCase(fetchObjects.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(fetchComments.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.comments = action.payload;
    })
    .addCase(fetchComments.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(fetchSingleObject.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(fetchSingleObject.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.currentObject = action.payload;
    })
    .addCase(fetchSingleObject.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(deleteObject.pending, (state, action) => {
      console.log('delete pending');
    })
    .addCase(deleteObject.fulfilled, (state, action) => {
      console.log('delete successfully');
      state.currentObject = {};
    })
    .addCase(deleteObject.rejected, (state, action) => {
      console.log('delete rejected');
    })
    .addCase(postObject.pending, (state, action) => {
      console.log('post pending');
    })
    .addCase(postObject.fulfilled, (state, action) => {
      console.log('post successfully');
      state.currentObject = {};
    })
    .addCase(postObject.rejected, (state, action) => {
      console.log('post rejected');
    })
    .addCase(updateObject.pending, (state, action) => {
      console.log('update pending');
    })
    .addCase(updateObject.fulfilled, (state, action) => {
      console.log('updated successfully', action.payload);
    })
    .addCase(updateObject.rejected, (state, action) => {
      console.log('update rejected');
    })
    .addCase(resetCurrentObject, (state) => {
      state.currentObject = {};
      console.log('currentObject reset');
    })
    .addCase(setObjectName, (state, action) => {
      (state.currentObject as CurrentObject).name = action.payload;
    })
    .addCase(setObjectDescription, (state, action) => {
      (state.currentObject as CurrentObject).description = action.payload;
    })
    .addCase(setObjectImage, (state, action) => {
      (state.currentObject as CurrentObject).image = action.payload;
    })
    .addCase(setObjectState, (state, action) => {
      (state.currentObject as CurrentObject).state = action.payload;
      console.log((state.currentObject as CurrentObject).state)
    })
    .addCase(setObjectCategory, (state, action) => {
      (state.currentObject as CurrentObject).category = action.payload;
      console.log((state.currentObject as CurrentObject).category)
    });
});

export default objectsReducer;
