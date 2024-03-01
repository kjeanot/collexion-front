import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCollections } from '../../store/reducers/collectionsReducer';
import { fetchUserInfo } from '../../store/reducers/userReducer';
import Alert from '../Alert/Alert';

function App() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.loggedUser.id);

  const userAlert = useAppSelector((state) => state.user.userAlert);
  const collectionAlert = useAppSelector(
    (state) => state.collections.collectionAlert
  );
  const objectAlert = useAppSelector((state) => state.objects.objectAlert);

  const location = useLocation();

  useEffect(() => {
    userId && dispatch(fetchUserInfo(userId as number));
  }, []);

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App container mx-auto px-4 max-w-screen-xl">
      <Header />
      <main className="my-4">
        {userAlert.message && (
          <Alert type={userAlert.type} message={userAlert.message} />
        )}
        {collectionAlert.message && (
          <Alert
            type={collectionAlert.type}
            message={collectionAlert.message}
          />
        )}
        {objectAlert.message && (
          <Alert type={objectAlert.type} message={objectAlert.message} />
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
