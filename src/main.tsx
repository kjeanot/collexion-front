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
import { fetchSingleCollection } from './store/reducers/collectionsReducer';
import Error from './components/Error/Error';
import ObjectPage from './components/ObjectPage/ObjectPage';
import Home from './components/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      //Todo : ajouter un errorElement //Todo : ajouter les routes Collections,
      Object, Catégories, User, Mentions...
      <Route path="/categories" />
      <Route path="/category/:id" />
      <Route path="/collections" element={<Collections />} />
      <Route
        path="/collection/:id"
        element={<SingleCollection />}
        // loader={({ params }) => {
        //   const promise = fetch(
        //     `http://64ed31429cbded49acab4281.cloud.lan/Apothéose/collexion/projet-12-collexion-back/public/api/collection/${params.id}`
        //   ).then((res) => res.json);
        //   return promise;
        // }}
        // errorElement={<Error />}
      />
      <Route path="/home" element={<Home />} />
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
