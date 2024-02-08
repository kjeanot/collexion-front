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
  list: [
    {
      id: 2,
      name: 'hrthsrths',
      image: 'hsrthsrth',
      description: 'thsrthsrthszrth',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: null,
    },
    {
      id: 4,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: null,
    },
    {
      id: 5,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: null,
    },
    {
      id: 6,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: null,
    },
    {
      id: 7,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: null,
    },
    {
      id: 8,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: null,
    },
    {
      id: 9,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: null,
    },
    {
      id: 10,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '9 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: null,
    },
    {
      id: 11,
      name: 'Name',
      image: 'Image',
      description: 'Description',
      rating: 3,
    },
    {
      id: 12,
      name: 'Name',
      image: 'Image',
      description: 'Description',
      rating: 3,
    },
    {
      id: 13,
      name: 'Name',
      image: 'Image',
      description: 'Description',
      rating: 3,
    },
  ],
};

export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async (_, thunkAPI) => {
    const response = await axios.get(
      'http://64ed31429cbded49acab4281.cloud.lan/Apothéose/collexion/projet-12-collexion-back/public/api/collections'
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
