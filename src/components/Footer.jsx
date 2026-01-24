import whatsapp from "../assets/whatsapp.png";
import ubicacion from "../assets/Ubicacion.png";
import domicilio from "../assets/Domicilio.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={whatsapp} alt="whatsapp" />
        <a href="https://wa.me/+5355862600" target="_blank">
          +53 5 5862600
        </a>
      </div>
      <div>
        <img src={ubicacion} alt="ubicacion" />
        <div>
          <p>Plaza, La Habana</p>
          <p>Artemisa, Artemisa</p>
        </div>
      </div>
      <div>
        <img src={domicilio} alt="domicilio" />
        <p>Contamos con domicilio</p>
      </div>
    </footer>
  );
};

export default Footer;
