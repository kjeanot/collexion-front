import logo from "../../assets/logo.svg";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Carroussel from "../Carroussel/Carroussel"
import "./App.scss";
import store from "../../store";

function App() {
  return (
    <div className="App container mx-auto px-4 max-w-screen-xl">
      <Header />
      <Carroussel />
      <Footer />
    </div>
  );
}

export default App;
