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
import {
  collectionsLoader,
  singleCollectionLoader,
  singleObjectLoader,
  userLoader,
} from './loaders/loaders';
import Error from './components/Error/Error';
import Subscribe from './components/Subscribe/Subscribe';
import Home from './components/Home/Home';
import Content from './components/Content/Content';
import Categories from './components/Category/Categories';
import Objects from './components/Object/Objects';
import ObjectPage from './components/ObjectPage/ObjectPage';
import SingleObjectEdit from './components/ObjectPage/SingleObjectEdit';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:id" element={<ObjectPage />} />
      <Route path="/objects" element={<Objects />} />
      <Route
        path="/collections"
        element={<Collections />}
        loader={collectionsLoader}
        errorElement={<Error />}
      />
      <Route
        path="/collection/:id"
        element={<SingleCollection />}
        loader={singleCollectionLoader}
        errorElement={<Error />}
      />
      <Route path="/collection/:id/edit" element={<SingleCollectionEdit />} />
      <Route path="/collection/new" element={<SingleCollectionEdit />} />
      <Route
        path="/object/:id"
        loader={singleObjectLoader}
        element={<ObjectPage />}
        errorElement={<Error />}
      />
      <Route path="/object/:id/edit" element={<SingleObjectEdit />} />
      <Route path="/object/new" element={<SingleObjectEdit />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/user/:id" loader={userLoader} element={<User />} errorElement={<Error />}>
        <Route index element={<UserCollectionsList />} />
        <Route path="/user/:id/favorites" element={<Subscribe />} />
      </Route>
      <Route path="/mentions" element={<Content />} />
      <Route path="/*" element={<Error />} />
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
