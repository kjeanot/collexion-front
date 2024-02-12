import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './components/App/App';

import './styles/index.scss';
import store from './store';
import Collections from './components/Collection/Collections';
import SingleCollection from './components/Collection/SingleCollection';
import singleCollectionLoader from './loaders/singleCollection';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchSingleCollection } from './store/reducers/collections';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      //Todo : ajouter un errorElement //Todo : ajouter les routes Collections,
      Object, Catégories, User, Mentions...
      <Route path="/categories" />
      <Route path="/category/:id" />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collection/:id" element={<SingleCollection />} 
      loader={({ params }) => async (params) => {
        console.log(parseInt(params.id));
        const dispatch = useAppDispatch();
        const currentCollection = useAppSelector(
          (state) => state.collections.currentCollection
        );
        dispatch(fetchSingleCollection(parseInt(params.id)));
        return currentCollection;
      }}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
