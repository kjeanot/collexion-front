import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCollections } from '../../store/reducers/collectionsReducer';
import { fetchUserInfo } from '../../store/reducers/userReducer';

function App() {
  const dispatch = useAppDispatch();
  const isUserLogged = useAppSelector(
    (state) => state.user.loggedUser.isUserlogged
  );
  const userId = useAppSelector((state) => state.user.loggedUser.id);

  useEffect(() => {
    isUserLogged && dispatch(fetchUserInfo(userId as number));
  }, []);

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
