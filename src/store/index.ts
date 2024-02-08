import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app";



const store = configureStore({
  // The store is divided in 4 main reducers for structuration reasons.
  reducer: {
    // objects: objectsReducer,
    // collections: collectionsReducer,
    // user: userReducer,
    app: appReducer
  }
});

export default store;

// Je déduis le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;