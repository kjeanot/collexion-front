import logo from '../../assets/logo.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App container mx-auto px-4">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="bg-red-700">
          Edit <code>src/components/App/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
