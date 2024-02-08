import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { Collection } from '../../types/types';
import axios from 'axios';

interface CollectionsState {
  list: Collection[];
}

export const initialState: CollectionsState = {
  list: [],
};

export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async (_, thunkAPI) => {
    const response = await axios.get(
      'http://64ed31429cbded49acab4281.cloud.lan/Apothéose/collexion/projet-12-collexion-back/public/api/collections',
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
    });
});

export default collectionsReducer;
