import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { ICollection } from '../../types/types';
import axios from 'axios';
import { RootState } from '..';

interface CollectionsState {
  list: ICollection[];
  currentCollection: null | ICollection;
}

export const initialState: CollectionsState = {
  list: [],
  currentCollection: null,
};

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
    const token = JSON.parse(localStorage.getItem('jwt') ?? '');
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
);

// Middlewares for a single Collection CRUD

export const fetchSingleCollection = createAsyncThunk(
  'collections/fetchSingleCollection',
  async (id: number, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}collections/${id}`
    );
    return response.data;
  }
);

export const deleteCollection = createAsyncThunk(
  'collections/deleteCollection',
  async (id: number, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_PATH}collection/${id}`
    );
    return response.data;
  }
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
    });
});

export default collectionsReducer;
