import logo from '../../assets/logo.svg';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Carroussel from '../Carrousel/Carrousel';
import './App.scss';
import store from '../../store';
import Subscribe from '../Subscribe/Subscribe';
import Content from '../Content/Content';
import Comment from '../Comment/Comment';

function App() {
  return (
    <div className="App container mx-auto px-4 max-w-screen-xl">
      <Header />
      {/* <Content /> */}
      {/* <Subscribe /> */}
      {/* <Carroussel /> */}
      {/* <Gallery /> */}
      <Card />
      <Comment />
      <Footer />
    </div>
  );
}

export default App;
