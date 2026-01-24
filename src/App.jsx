import "./App.css";
import logo from "./assets/Flower.svg";
import CardGrid from "./components/CardGrid";

import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="body">
        <div className="hero">
          <h1>Bloom Essence</h1>
        </div>
        <ul>
          <li>
            <img src={logo} alt="logo" />
            <p>Descubre la magia de los perfumes auténticos</p>
          </li>
          <li>
            <img src={logo} alt="logo" />
            <p>Cada fragancia 100% original</p>
          </li>
          <li>
            <img src={logo} alt="logo" />
            <p>Escanea el QR y conoce las opiniones de quienes ya lo disfrutan</p>
          </li>
          <li>
            <img src={logo} alt="logo" />
            <p>Compra con total seguridad y siente la exclusividad de cada aroma</p>
          </li>
        </ul>
        <CardGrid />
      </div>
      <Footer />
    </>
  );
}

export default App;
