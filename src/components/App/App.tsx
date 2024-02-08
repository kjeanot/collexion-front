import logo from '../../assets/logo.svg';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Carrousel from '../Carrousel/Carrousel';
import './App.scss';

function App() {
  return (
    <div className="App container mx-auto px-4 max-w-screen-xl">
      <Header />
      <Carrousel />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
