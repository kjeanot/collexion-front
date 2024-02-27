import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import {
  CurrentCollection,
  IAlert,
  ICollection,
  IObject,
} from '../../types/types';
import axios from 'axios';
import { RootState } from '..';

interface CollectionsState {
  list: ICollection[];
  currentCollection: CurrentCollection;
  randomCollection: ICollection[];
  collectionAlert: IAlert;
  redirectPath: string;
}

export const initialState: CollectionsState = {
  list: [],
  currentCollection: {},
  randomCollection: [],
  collectionAlert: {
    message: '',
    type: '',
  },
  redirectPath: '',
};

const storedToken = localStorage.getItem('jwt');
const token = storedToken ? JSON.parse(storedToken) : '';
console.log('token', token);

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
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}collections`
    );
    return response.data;
  }
);

// Middlewares for a single Collection CRUD

export const fetchSingleCollection = createAsyncThunk(
  'collections/fetchSingleCollection',
  async (id: number, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}collection/${id}`
    );
    return response.data;
  }
);

export const uploadCollectionImage = createAsyncThunk(
  'collections/uploadImage',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const formData = new FormData();
    formData.append('file', state.collections.currentCollection.image as File);

    if (token) {
      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}secure/collection/upload_file`,
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

export const deleteCollection = createAsyncThunk(
  'collections/deleteCollection',
  async (id: number, thunkAPI) => {
    if (token) {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_PATH}secure/collection/${id}`,
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
        `${import.meta.env.VITE_API_PATH}secure/collection/${id}`,
        {
          name: state.collections.currentCollection.name,
          description: state.collections.currentCollection.description,
          image: state.collections.currentCollection.image,
          relatedObjects: state.collections.currentCollection.relatedObjects,
          title:
            'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ',
          is_active: true,
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
        `${import.meta.env.VITE_API_PATH}secure/collection`,
        {
          ...state.collections.currentCollection,
          title: state.collections.currentCollection.name,
          is_active: true,
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

export const randomCollection = createAsyncThunk(
  'collections/randomCollection',
  async (_, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_PATH}collection_random`
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
export const setCollectionImage = createAction<string | File>(
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
export const resetCollectionAlert = createAction('collection/resetAlert');

export const setCollectionRedirectPath = createAction<string>('collection/setRedirectPath');

const collectionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCollections.pending, (state, action) => {})
    .addCase(fetchCollections.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.list = action.payload;
    })
    .addCase(fetchCollections.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(fetchSingleCollection.pending, (state, action) => {})
    .addCase(fetchSingleCollection.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.currentCollection = action.payload;
    })
    .addCase(fetchSingleCollection.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(uploadCollectionImage.pending, (state, action) => {})
    .addCase(uploadCollectionImage.fulfilled, (state, action) => {
      console.log('uploaded successfully');
      state.currentCollection.image = action.payload.url;
      state.collectionAlert.message = 'Image uploaded successfully';
      state.collectionAlert.type = 'success';
    })
    .addCase(uploadCollectionImage.rejected, (state, action) => {
      console.log('upload rejected');
      state.collectionAlert.message = 'Image upload failed';
      state.collectionAlert.type = 'error';
    })
    .addCase(deleteCollection.pending, (state, action) => {})
    .addCase(deleteCollection.fulfilled, (state, action) => {
      console.log('delete successfully');
      state.redirectPath = `/user/${state.currentCollection.user?.id}`;
      state.currentCollection = {};
      state.collectionAlert.message = 'Collection deleted successfully';
      state.collectionAlert.type = 'success';
      state.redirectPath = '';
    })
    .addCase(deleteCollection.rejected, (state, action) => {
      console.log('delete rejected');
      state.collectionAlert.message = 'Collection delete failed';
      state.collectionAlert.type = 'error';
    })
    .addCase(postCollection.pending, (state, action) => {})
    .addCase(postCollection.fulfilled, (state, action) => {
      console.log('post successfully');
      state.currentCollection = {};
      state.collectionAlert.message = 'Collection created successfully';
      state.collectionAlert.type = 'success';
    })
    .addCase(postCollection.rejected, (state, action) => {
      console.log('post rejected');
      state.collectionAlert.message = 'Collection creation failed';
      state.collectionAlert.type = 'error';
    })
    .addCase(updateCollection.pending, (state, action) => {})
    .addCase(updateCollection.fulfilled, (state, action) => {
      console.log('updated successfully', action.payload);
      state.currentCollection = action.payload;
      state.collectionAlert.message = 'Collection updated successfully';
      state.collectionAlert.type = 'success';
      state.currentCollection.id
        ? (state.redirectPath = `/collection/${state.currentCollection.id}`)
        : '';
    })
    .addCase(updateCollection.rejected, (state, action) => {
      console.log('update rejected');
      state.collectionAlert.message = 'Collection update failed';
      state.collectionAlert.type = 'error';
    })
    .addCase(randomCollection.pending, (state, action) => {})
    .addCase(randomCollection.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.randomCollection = action.payload;
    })
    .addCase(randomCollection.rejected, (state, action) => {
      console.log('rejected', action);
    })
    .addCase(resetCurrentCollection, (state) => {
      state.currentCollection = {};
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
    })
    .addCase(setCollectionRelatedObjects, (state, action) => {
      (state.currentCollection as CurrentCollection).relatedObjects =
        action.payload;
    })
    .addCase(resetCollectionAlert, (state) => {
      state.collectionAlert.message = '';
      state.collectionAlert.type = '';
    })
    .addCase(setCollectionRedirectPath, (state, action) => {
      state.redirectPath = action.payload;
    });
    ;
});


export default collectionsReducer;
