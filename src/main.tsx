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
import SingleCollectionEdit from './components/Collection/SingleCollectionEdit';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchSingleCollection } from './store/reducers/collectionsReducer';
import Error from './components/Error/Error';
import axios from 'axios';
import Subscribe from './components/Subscribe/Subscribe';
import Home from './components/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      //Todo : ajouter un errorElement //Todo : ajouter les routes Collections,
      Object, Catégories, User, Mentions...
      <Route path="/categories" />
      <Route path="/category/:id" />
      <Route path="/collections" element={<Collections />} />
      <Route
        path="/collection/:id"
        element={<SingleCollection />}
        loader={({ params }) => {
          const token = JSON.parse(localStorage.getItem('jwt'));
          const promise = axios(
            `http://ec2-16-170-215-204.eu-north-1.compute.amazonaws.com/index.php/api/collection/${params.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          return promise;
        }}
        // errorElement={<Error />}
      />
      <Route path="/collection/:id/edit" element={<SingleCollectionEdit />} />
      <Route path="/collection/new" element={<SingleCollectionEdit />} />
      <Route path="/subscribe" element={<Subscribe />} />
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
