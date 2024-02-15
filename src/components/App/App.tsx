import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCollections } from '../../store/reducers/collectionsReducer';
import CollectionsList from '../Collection/CollectionsList';
import CollectionCTA from '../Collection/CollectionCTA';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import './App.scss';
import { login } from '../../store/reducers/userReducer';
import SingleCollection from '../Collection/SingleCollection';

function App() {

  return (
    <div className="App container mx-auto px-4 max-w-screen-xl">
      <Header />
      <main className="my-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
