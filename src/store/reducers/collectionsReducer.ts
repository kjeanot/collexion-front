import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { ICollection } from '../../types/types';
import axios from 'axios';

interface CollectionsState {
  list: ICollection[];
  currentCollection: null | ICollection;
}

export const initialState: CollectionsState = {
  list: [],
  currentCollection: null,
};

// Middleware for fetching all the collections

export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async (_, thunkAPI) => {
    const response = await axios.get(
      'http://64ed31429cbded49acab4281.cloud.lan/Apothéose/collexion/projet-12-collexion-back/public/api/collections',
      {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDc3NDkzODAsImV4cCI6MTcwNzc1Mjk4MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.rvuzm8FCMUZMykxKz9TM85PPze55RxdmeGo-VvwE47Fkg-yHtKCCom_gSgxhZJekhfbvNJ2k7MyK2TnjwWgCTPq57L_b0J_LfvV396R8ju6SIK_ULTdTF05UObDfpS-01ZXUvLR9ZsEMNdLewvKfyOVtHmlsr21qkWSlhM12UMc81hIRc9aQa9j0S5fWfQvDVTH2PKBxqVuiK1OzWeuGArvCh8P3ZmKrJucCmPogrNFomphIoli_NwOIiLzYhSYi9iEHMbRbdzykRMiWPR0yYkxM5N1IXLNAqZmqfNk9z9d9eu0-L9BaqiMrWuevmRcO8_RIOKgVzkri2LeovGjujA',
        },
        auth: {
          username: 'admin@admin.com',
          password: 'admin',
        },
      }
    );
    return response.data;
  }
);

// Middleware for a single Collection CRUD

export const fetchSingleCollection = createAsyncThunk(
  'collections/fetchSingleCollection',
  async (id: number, thunkAPI) => {
    const response = await axios.get(
      `http://64ed31429cbded49acab4281.cloud.lan/Apothéose/collexion/projet-12-collexion-back/public/api/collection/${id}`
    );
    return response.data;
  }
);

export const deleteCollection = createAsyncThunk(
  'collections/deleteCollection',
  async (id: number, thunkAPI) => {
    const response = await axios.delete(
      `http://64ed31429cbded49acab4281.cloud.lan/Apothéose/collexion/projet-12-collexion-back/public/api/collection/${id}`
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
