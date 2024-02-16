import axios from 'axios';
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
import UserCollectionsList from './components/User/UserCollectionsList';
import User from './components/User/User';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchSingleCollection } from './store/reducers/collectionsReducer';
import Error from './components/Error/Error';
import Subscribe from './components/Subscribe/Subscribe';
import Home from './components/Home/Home';
import Content from './components/Content/Content';
import Gallery from './components/Gallery/Gallery';
import Categories from './components/Category/Categories';
import ObjectPage from './components/ObjectPage/ObjectPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      //Todo : ajouter un errorElement //Todo : ajouter les routes Collections,
      Object, Catégories, User, Mentions...
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:id" element={<ObjectPage />} />
      <Route
        path="/collections"
        element={<Collections />}
        loader={() => {
          const token = JSON.parse(localStorage.getItem('jwt') ?? '');
          const promise = axios(
            `http://ec2-16-170-215-204.eu-north-1.compute.amazonaws.com/index.php/api/collections`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          return promise;
        }}
      />
      <Route
        path="/collection/:id"
        element={<SingleCollection />}
        loader={({ params }) => {
          const token = JSON.parse(localStorage.getItem('jwt') ?? '');
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
        errorElement={<Error />}
      />
      <Route path="/collection/:id/edit" element={<SingleCollectionEdit />} />
      <Route path="/collection/new" element={<SingleCollectionEdit />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/user/:id" element={<User />}>
        <Route index element={<UserCollectionsList />} />
        <Route path="/user/:id/favorites" element={<Subscribe />} />
      </Route>
      <Route path="/mentions" element={<Content />} />
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
