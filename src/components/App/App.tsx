import { useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCollections } from '../../store/reducers/collections';
import CollectionsList from "../Collection/CollectionsList";
import CollectionCTA from "../Collection/CollectionCTA";
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();
  const collectionList = useAppSelector((state) => state.collections.list);
  useEffect(() => {
    dispatch(fetchCollections());
  }, []);
  console.log(collectionList);
  return (
    <div className="App container mx-auto px-4 max-w-screen-xl">
      <Header />
      <CollectionCTA />
      <CollectionsList data={collectionList} />
      <Footer />
    </div>
  );
}

export default App;
