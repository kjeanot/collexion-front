import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { CurrentCollection, ICollection, IObject } from '../../types/types';
import { RootState } from '..';

interface CollectionsState {
  list: ICollection[];
  currentCollection: CurrentCollection;
  randomCollection: ICollection[];
}

export const initialState: CollectionsState = {
  list: [],
  currentCollection: {},
  randomCollection: [],
};

const storedToken = localStorage.getItem('jwt');
const token = storedToken ? JSON.parse(storedToken) : '';

/**
 * Middleware for fetching all the collections
 *
 * Uses axios to request the /api/collections route and get all the collection from the API.
 *
 * @return {Promise} Return a promise with collections when fulfilled.
 */
export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async (_, thunkAPI) => {
    if (token) {
      const response = await axios.get(
        `${import.meta.env.VITE_API_PATH}collections`,
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

// Middlewares for a single Collection CRUD

export const fetchSingleCollection = createAsyncThunk(
  'collections/fetchSingleCollection',
  async (id: number, thunkAPI) => {
    if (token) {
      const response = await axios.get(
        `${import.meta.env.VITE_API_PATH}collection/${id}`,
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

export const deleteCollection = createAsyncThunk(
  'collections/deleteCollection',
  async (id: number, thunkAPI) => {
    if (token) {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_PATH}collection/${id}`,
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

export const updateCollection = createAsyncThunk(
  'collections/updateCollection',

  async (id: number, thunkAPI) => {
    if (token) {
      const state = thunkAPI.getState() as RootState;
      const response = await axios.put(
        `${import.meta.env.VITE_API_PATH}collection/${id}`,
        {
          name: state.collections.currentCollection.name,
          description: state.collections.currentCollection.description,
          image: state.collections.currentCollection.image,
          relatedObjects: state.collections.currentCollection.relatedObjects,
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

export const postCollection = createAsyncThunk(
  'collections/postCollection',
  async (_, thunkAPI) => {
    if (token) {
      const state = thunkAPI.getState() as RootState;
      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}collection`,
        state.collections.currentCollection,
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

export const randomCollection = createAsyncThunk(
  'collections/randomCollection',
  async (_, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem('jwt') ?? '');
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}collection_random`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const resetCurrentCollection = createAction(
  'collections/resetCurrentCollection'
);
export const setCollectionName = createAction<string>(
  'collection/setCollectionName'
);
export const setCollectionDescription = createAction<string>(
  'collection/setCollectionDescription'
);
export const setCollectionImage = createAction<string>(
  'collection/setCollectionImage'
);
export const setCollectionId = createAction<number>(
  'collection/setCollectionId'
);
export const setCollectionObjects = createAction<IObject[]>(
  'collection/setCollectionObjects'
);
export const setCollectionRelatedObjects = createAction<IObject[]>(
  'collection/setCollectionRelatedObjects'
);

const collectionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCollections.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(fetchCollections.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.list = action.payload;
    })
    .addCase(fetchCollections.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(fetchSingleCollection.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(fetchSingleCollection.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.currentCollection = action.payload;
    })
    .addCase(fetchSingleCollection.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(deleteCollection.pending, (state, action) => {
      console.log('delete pending');
    })
    .addCase(deleteCollection.fulfilled, (state, action) => {
      console.log('delete successfully');
      state.currentCollection = {};
    })
    .addCase(deleteCollection.rejected, (state, action) => {
      console.log('delete rejected');
    })
    .addCase(postCollection.pending, (state, action) => {
      console.log('post pending');
    })
    .addCase(postCollection.fulfilled, (state, action) => {
      console.log('post successfully');
      state.currentCollection = {};
    })
    .addCase(postCollection.rejected, (state, action) => {
      console.log('post rejected');
    })
    .addCase(updateCollection.pending, (state, action) => {
      console.log('update pending');
    })
    .addCase(updateCollection.fulfilled, (state, action) => {
      console.log('updated successfully', action.payload);
    })
    .addCase(updateCollection.rejected, (state, action) => {
      console.log('update rejected');
    })
    .addCase(randomCollection.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(randomCollection.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.randomCollection = action.payload;
    })
    .addCase(randomCollection.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(resetCurrentCollection, (state) => {
      state.currentCollection = {};
      console.log('currentCollection reset');
    })
    .addCase(setCollectionName, (state, action) => {
      (state.currentCollection as CurrentCollection).name = action.payload;
    })
    .addCase(setCollectionDescription, (state, action) => {
      (state.currentCollection as CurrentCollection).description =
        action.payload;
    })
    .addCase(setCollectionImage, (state, action) => {
      (state.currentCollection as CurrentCollection).image = action.payload;
    })
    .addCase(setCollectionObjects, (state, action) => {
      (state.currentCollection as CurrentCollection).myobjects = action.payload;
      console.log(state.currentCollection.relatedObjects);
    })
    .addCase(setCollectionRelatedObjects, (state, action) => {
      (state.currentCollection as CurrentCollection).relatedObjects =
        action.payload;
      console.log(state.currentCollection.relatedObjects);
    });
});

export default collectionsReducer;
