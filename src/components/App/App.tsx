import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.scss';
import SingleCollection from '../Collection/SingleCollection';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchCollections } from '../../store/reducers/collectionsReducer';
import { fetchUserInfo } from '../../store/reducers/userReducer';
import Alert from '../Alert/Alert';

function App() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.loggedUser.id);

  const userAlert = useAppSelector((state) => state.user.userAlert);
  const collectionAlert = useAppSelector((state) => state.collections.collectionAlert);

  useEffect(() => {
    userId && dispatch(fetchUserInfo(userId as number));
  }, []);

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);

  return (
    <div className="App container mx-auto px-4 max-w-screen-xl">
      <Header />
      <main className="my-4">
        {userAlert.message && (
          <Alert type={userAlert.type} message={userAlert.message} />
        )}
        {collectionAlert.message && (
          <Alert type={collectionAlert.type} message={collectionAlert.message} />
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
