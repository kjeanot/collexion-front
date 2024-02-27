import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import {
  CurrentObject,
  ICollection,
  IComment,
  IObject,
} from '../../types/types';
import axios from 'axios';
import { RootState } from '..';
import { NavigateFunction } from 'react-router-dom';
import { Action } from '@cloudinary/url-gen/internal/Action';

interface ObjectsState {
  list: IObject[];
  currentObject: CurrentObject;
  comments: IComment[];
  currentComment?: string;
}

export const initialState: ObjectsState = {
  list: [],
  currentObject: {},
  comments: [],
  currentComment: undefined,
};

const storedToken = localStorage.getItem('jwt');
const token = storedToken ? JSON.parse(storedToken) : '';
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
    const response = await axios.get(`${import.meta.env.VITE_API_PATH}objects`);
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
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}comments`
    );
    return response.data;
  }
);

// Middlewares for a single Object CRUD

export const fetchSingleObject = createAsyncThunk(
  'objects/fetchSingleObject',
  async (id: number, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}object/${id}`
    );
    return response.data;
  }
);

export const uploadObjectImage = createAsyncThunk(
  'objects/uploadObjectImage',
  async (_, thunkAPI) => {
    if (token) {
      const state = thunkAPI.getState() as RootState;
      const formData = new FormData();
      formData.append('file', state.objects.currentObject.image as File);
      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}secure/object/upload_file`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    }
  }
);

export const deleteObject = createAsyncThunk(
  'objects/deleteObject',
  async (id: number, thunkAPI) => {
    if (token) {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_PATH}secure/object/${id}`,
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

export const updateObject = createAsyncThunk(
  'objects/updateObject',
  async (id: number, thunkAPI) => {
    if (token) {
      const state = thunkAPI.getState() as RootState;
      const response = await axios.put(
        `${import.meta.env.VITE_API_PATH}secure/object/${id}`,
        {
          name: state.objects.currentObject.name,
          description: state.objects.currentObject.description,
          state: state.objects.currentObject.state,
          relatedCategory: state.objects.currentObject.relatedCategory,
          relatedMyCollections:
            state.objects.currentObject.relatedMyCollections,
          image: state.objects.currentObject.image,
        },
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

export const postObject = createAsyncThunk(
  'objects/postObject',
  async (_, thunkAPI) => {
    if (token) {
      const state = thunkAPI.getState() as RootState;
      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}secure/object`,
        {
          name: state.objects.currentObject.name,
          description: state.objects.currentObject.description,
          state: state.objects.currentObject.state,
          relatedCategory: state.objects.currentObject.relatedCategory,
          relatedMyCollections:
            state.objects.currentObject.relatedMyCollections,
          image: state.objects.currentObject.image,
        },
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

export const resetCurrentObject = createAction('objects/resetCurrentObject');
export const setObjectName = createAction<string>('object/setObjectName');
export const setObjectDescription = createAction<string>(
  'object/setObjectDescription'
);
export const setObjectImage = createAction<string | File>(
  'object/setObjectImage'
);
export const setObjectId = createAction<number>('object/setObjectId');
export const setObjectState = createAction<string>('object/setObjectState');
export const setObjectCategory = createAction<number>(
  'object/setObjectCategory'
);
export const setObjectCollections = createAction<any>(
  'object/setObjectCollections'
);
export const postComment = createAsyncThunk(
  'object/postComment',
  async (id: number, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axios.post(
      `${import.meta.env.VITE_API_PATH}secure/comment`,
      { content: state.objects.currentComment, object: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const setComment = createAction<string>('object/setComment');
export const setObject = createAction<number>('object/setObject');

const objectsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchObjects.pending, (state, action) => {})
    .addCase(fetchObjects.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.list = action.payload;
    })
    .addCase(fetchObjects.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(fetchComments.pending, (state, action) => {})
    .addCase(fetchComments.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.comments = action.payload;
    })
    .addCase(fetchComments.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(fetchSingleObject.pending, (state, action) => {})
    .addCase(fetchSingleObject.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.currentObject = action.payload;
    })
    .addCase(fetchSingleObject.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(uploadObjectImage.pending, (state, action) => {})
    .addCase(uploadObjectImage.fulfilled, (state, action) => {
      state.currentObject.image = action.payload.url;
      console.log('fulfilled', action.payload);
    })
    .addCase(uploadObjectImage.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(deleteObject.pending, (state, action) => {})
    .addCase(deleteObject.fulfilled, (state, action) => {
      console.log('delete successfully');
      state.currentObject = {};
    })
    .addCase(deleteObject.rejected, (state, action) => {
      console.log('delete rejected');
    })
    .addCase(postObject.pending, (state, action) => {})
    .addCase(postObject.fulfilled, (state, action) => {
      console.log('post successfully');
      state.currentObject = {};
    })
    .addCase(postObject.rejected, (state, action) => {
      console.log('post rejected');
    })
    .addCase(updateObject.pending, (state, action) => {})
    .addCase(updateObject.fulfilled, (state, action) => {
      console.log('updated successfully', action.payload);
    })
    .addCase(updateObject.rejected, (state, action) => {
      console.log('update rejected');
    })
    .addCase(postComment.pending, (state, action) => {})
    .addCase(postComment.fulfilled, (state, action) => {
      console.log('post successfully');
      console.log(action.payload);
      state.currentObject.comments = [
        ...(state.currentObject.comments || []),
        action.payload,
      ];
    })
    .addCase(postComment.rejected, (state, action) => {
      console.log('post rejected');
    })
    .addCase(setComment, (state, action) => {
      state.currentComment = action.payload;
    })
    .addCase(resetCurrentObject, (state) => {
      state.currentObject = {};
    })
    .addCase(setObjectName, (state, action) => {
      state.currentObject.name = action.payload;
    })
    .addCase(setObjectDescription, (state, action) => {
      state.currentObject.description = action.payload;
    })
    .addCase(setObjectImage, (state, action) => {
      state.currentObject.image = action.payload;
    })
    .addCase(setObjectState, (state, action) => {
      state.currentObject.state = action.payload;
    })
    .addCase(setObjectCategory, (state, action) => {
      state.currentObject.relatedCategory = action.payload;
    })
    .addCase(setObjectCollections, (state, action) => {
      state.currentObject.relatedMyCollections = action.payload;
    });
});

export default objectsReducer;
