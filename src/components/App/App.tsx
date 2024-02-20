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
import SingleCollection from '../Collection/SingleCollection';



function App() {

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCollections());
  }, []);

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
