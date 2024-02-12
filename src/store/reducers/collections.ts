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
  list: [
    {
      id: 2,
      name: 'hrthsrths',
      image: 'hsrthsrth',
      description: 'thsrthsrthszrth',
      rating: 5,
      user: {
        id: 3,
        nickname: 'user 1',
        picture: null,
      },
      myobjects: [
        {
          id: 4,
          name: 'Object 0',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 5,
          name: 'Object 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 6,
          name: 'Object 2',
          image: 'https://via.placeholder.com/150',
        },
      ],
      created_at: '2024-02-07T16:35:33+00:00',
    },
    {
      id: 3,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: 3,
      user: {
        id: 4,
        nickname: 'user 2',
        picture: null,
      },
      myobjects: [
        {
          id: 7,
          name: 'Object 0',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 8,
          name: 'Object 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 9,
          name: 'Object 2',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 31,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 32,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
      ],
      created_at: '2024-02-07T16:35:33+00:00',
    },
    {
      id: 4,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: 2,
      user: {
        id: 5,
        nickname: 'user 3',
        picture: null,
      },
      myobjects: [
        {
          id: 10,
          name: 'Object 0',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 11,
          name: 'Object 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 12,
          name: 'Object 2',
          image: 'https://via.placeholder.com/150',
        },
      ],
      created_at: '2024-02-07T16:35:33+00:00',
    },
    {
      id: 5,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: 3,
      user: {
        id: 6,
        nickname: 'user 4',
        picture: null,
      },
      myobjects: [
        {
          id: 13,
          name: 'Object 0',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 14,
          name: 'Object 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 15,
          name: 'Object 2',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 33,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 34,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 35,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 36,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 38,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 39,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
      ],
      created_at: '2024-02-07T16:35:33+00:00',
    },
    {
      id: 6,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: null,
      user: {
        id: 7,
        nickname: 'user 5',
        picture: null,
      },
      myobjects: [
        {
          id: 16,
          name: 'Object 0',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 17,
          name: 'Object 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 18,
          name: 'Object 2',
          image: 'https://via.placeholder.com/150',
        },
      ],
      created_at: '2024-02-07T16:35:33+00:00',
    },
    {
      id: 7,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: 3,
      user: {
        id: 8,
        nickname: 'user 6',
        picture: null,
      },
      myobjects: [
        {
          id: 19,
          name: 'Object 0',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 20,
          name: 'Object 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 21,
          name: 'Object 2',
          image: 'https://via.placeholder.com/150',
        },
      ],
      created_at: '2024-02-07T16:35:33+00:00',
    },
    {
      id: 8,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: 3,
      user: {
        id: 9,
        nickname: 'user 7',
        picture: null,
      },
      myobjects: [
        {
          id: 22,
          name: 'Object 0',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 23,
          name: 'Object 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 24,
          name: 'Object 2',
          image: 'https://via.placeholder.com/150',
        },
      ],
      created_at: '2024-02-07T16:35:33+00:00',
    },
    {
      id: 9,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: 3,
      user: {
        id: 10,
        nickname: 'user 8',
        picture: null,
      },
      myobjects: [
        {
          id: 25,
          name: 'Object 0',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 26,
          name: 'Object 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 27,
          name: 'Object 2',
          image: 'https://via.placeholder.com/150',
        },
      ],
      created_at: '2024-02-07T16:35:33+00:00',
    },
    {
      id: 10,
      name: 'Ma premiere collection ',
      image: 'https://via.placeholder.com/150',
      description:
        '9 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
      rating: 3,
      user: {
        id: 11,
        nickname: 'user 9',
        picture: null,
      },
      myobjects: [
        {
          id: 28,
          name: 'Object 0',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 29,
          name: 'Object 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 30,
          name: 'Object 2',
          image: 'https://via.placeholder.com/150',
        },
      ],
      created_at: '2024-02-07T16:35:33+00:00',
    },
    {
      id: 11,
      name: 'Name',
      image: 'Image',
      description: 'Description',
      rating: 3,
      user: {
        id: 14,
        nickname: 'usertest',
        picture: null,
      },
      myobjects: [],
      created_at: '2024-02-08T10:23:10+00:00',
    },
    {
      id: 12,
      name: 'Name',
      image: 'Image',
      description: 'Description',
      rating: 3,
      user: {
        id: 19,
        nickname: 'userlfchgjkfghkj',
        picture: null,
      },
      myobjects: [],
      created_at: '2024-02-08T10:27:41+00:00',
    },
    {
      id: 13,
      name: 'Name',
      image: 'Image',
      description: 'Description',
      rating: 3,
      user: {
        id: 21,
        nickname: 'userlfchgjkfghkj',
        picture: null,
      },
      myobjects: [
        {
          id: 37,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 40,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 41,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 42,
          name: 'Object test api ',
          image: 'https://via.placeholder.com/150',
        },
      ],
      created_at: '2024-02-08T10:29:01+00:00',
    },
  ],
  currentCollection: null
};

// Middleware for fetching all the collections

export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async (_, thunkAPI) => {
    const response = await axios.get(
      'http://64ed31429cbded49acab4281.cloud.lan/Apothéose/collexion/projet-12-collexion-back/public/api/collections'
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
    })
});

export default collectionsReducer;
