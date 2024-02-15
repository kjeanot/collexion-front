import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appReducer';
import userReducer from './reducers/userReducer';
import collectionsReducer from './reducers/collectionsReducer';

const store = configureStore({
  // The store is divided in 5 main reducers for structuration purposes.
  reducer: {
    // objects: objectsReducer,
    collections: collectionsReducer,
    // categories: categoriesReducer,
    user: userReducer,
    app: appReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

