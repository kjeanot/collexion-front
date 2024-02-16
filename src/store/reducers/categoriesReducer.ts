import axios from 'axios';
import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { ICategory } from '../../types/types';
import { RootState } from '..';

interface CategoriesState {
  list: ICategory[];
  currentCategory: null | ICategory;
}

export const initialState: CategoriesState = {
  list: [],
  currentCategory: null,
};

/**
 * Middleware for fetching all the categories
 *
 * Uses axios to request the /api/categories route and get all the categories from the API.
 *
 * @return {Promise} Return a promise with categories when fulfilled.
 */
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem('jwt') ?? '');
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}categories`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

// Middlewares for a single Categories CRUD

export const fetchSingleCategory = createAsyncThunk(
  'categories/fetchSingleCategory',
  async (id: number, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}categories/${id}`
    );
    return response.data;
  }
);

const collectionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCategories.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(fetchCategories.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.list = action.payload;
    })
    .addCase(fetchCategories.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(fetchSingleCategory.pending, (state, action) => {
      console.log('pending', action);
    })
    .addCase(fetchSingleCategory.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.currentCategory = action.payload;
    })
    .addCase(fetchSingleCategory.rejected, (state, action) => {
      console.log('rejected', action);
    });
});

export default collectionsReducer;