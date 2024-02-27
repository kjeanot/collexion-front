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
import CollectionsSearchResults from './components/Collection/CollectionsSearchResults';
import SingleCollection from './components/Collection/SingleCollection';
import SingleCollectionEdit from './components/Collection/SingleCollectionEdit';
import UserCollectionsList from './components/User/UserCollectionsList';
import User from './components/User/User';
import UserEdit from './components/User/UserEdit';
import {
  categoryLoader,
  collectionsLoader,
  randomCollectionLoader,
  randomObjectLoader,
  singleCollectionLoader,
  singleObjectLoader,
  userEditLoader,
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
import CollectionsListRandom from './components/Collection/CollectionsListRandom';
import ObjectsRandom from './components/Object/ObjectsRandom';
import CategoryPage from './components/Category/CategoryPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:id" element={<CategoryPage />} errorElement={<Error />} loader={categoryLoader}/>
      <Route path="/objects" element={<Objects />} />
      <Route
        path="/collections"
        element={<Collections />}
        loader={collectionsLoader}
        errorElement={<Error />}
      />
      <Route
        path="/collections/:search"
        element={<CollectionsSearchResults />}
        errorElement={<Error />}
      />
      <Route
        path="/collection/:id"
        element={<SingleCollection />}
        loader={singleCollectionLoader}
        errorElement={<Error />}
      />
      <Route
        path="/collection/random"
        element={<CollectionsListRandom />}
        loader={randomCollectionLoader}
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
      <Route
        path="/objet/random"
        element={<ObjectsRandom />}
        loader={randomObjectLoader}
        errorElement={<Error />}
      />
      <Route path="/object/:id/edit" element={<SingleObjectEdit />} />
      <Route path="/object/new" element={<SingleObjectEdit />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route
        path="/user/:id"
        loader={userLoader}
        element={<User />}
        errorElement={<Error />}
      >
        <Route
          index
          element={<UserCollectionsList collectionType="created" />}
        />
        <Route
          path="/user/:id/favorites"
          element={<UserCollectionsList collectionType="favorite" />}
        />
      </Route>
      <Route
        path="/user/:id/edit"
        element={<UserEdit />}
        loader={userEditLoader}
      />
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
