import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.scss';
import SingleCollection from '../Collection/SingleCollection';
import { useAppDispatch } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchCollections } from '../../store/reducers/collectionsReducer';



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
