import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { ICategory } from '../../types/types';
import { RootState } from '..';
import api from '../../hooks/api';

interface CategoriesState {
  list: ICategory[];
  currentCategory: null | ICategory;
  parentList: ICategory[];
  childrenList: ICategory[];
}

export const initialState: CategoriesState = {
  list: [],
  currentCategory: null,
  parentList: [],
  childrenList: [],
};

/**
 * Middleware for fetching all the categories
 *
 * Uses api to request the /api/categories route and get all the categories from the API.
 *
 * @return {Promise} Return a promise with categories when fulfilled.
 */
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    const response = await api.get(
      `${import.meta.env.VITE_API_PATH}categories`
    );
    return response.data;
  }
);

export const fetchParentCategories = createAsyncThunk(
  'categories/fetchParentCategories',
  async (_, thunkAPI) => {
    const response = await api.get(
      `${import.meta.env.VITE_API_PATH}categories/parents`
    );
    return response.data;
  }
);

export const fetchParentCategoryChilds = createAsyncThunk(
  'categories/fetchParentCategoriesChilds',
  async (id: number, thunkAPI) => {
        const response = await api.get(
      `${import.meta.env.VITE_API_PATH}category/${id}/childs`
    );
    return response.data;
  }
);

// Middlewares for a single Categories

export const fetchSingleCategory = createAsyncThunk(
  'categories/fetchSingleCategory',
  async (id: number, thunkAPI) => {
    const response = await api.get(
      `${import.meta.env.VITE_API_PATH}category/${id}`
    );
    return response.data;
  }
);

const collectionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCategories.pending, (state, action) => {})
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.list = action.payload;
    })
    .addCase(fetchCategories.rejected, (state, action) => {})
    .addCase(fetchSingleCategory.pending, (state, action) => {})
    .addCase(fetchSingleCategory.fulfilled, (state, action) => {
      state.currentCategory = action.payload;
      console.log(action.payload );
    })
    .addCase(fetchSingleCategory.rejected, (state, action) => {})
    .addCase(fetchParentCategories.pending, (state, action) => {})
    .addCase(fetchParentCategories.fulfilled, (state, action) => {
      state.parentList = action.payload;
    })
    .addCase(fetchParentCategories.rejected, (state, action) => {})
    .addCase(fetchParentCategoryChilds.pending, (state, action) => {})
    .addCase(fetchParentCategoryChilds.fulfilled, (state, action) => {
      state.childrenList = action.payload;
      console.log(action.payload);
    })
    .addCase(fetchParentCategoryChilds.rejected, (state, action) => {
      state.childrenList = [];
    })
    ;
});

export default collectionsReducer;
