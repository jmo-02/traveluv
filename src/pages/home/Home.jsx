import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const Home = () => {

  return (

        <section className="home" id="home">
        <div className="image">
          <img src="/images/home-img.svg" alt="Animación" />
        </div>
        <div className="content">
          <h3>
            Traveluv
          </h3>
          <h3>
            Movilidad Inteligente, Compartida y Segura
            </h3>
          <p>
          Descubre una nueva forma de viajar y transportar carga con nuestra plataforma digital. 
          Conectamos a conductores, pasajeros y remitentes en una red social de movilidad eficiente, sostenible y accesible.
          </p>
  
          <a href="/" className="btn">
            Viaja con Nosotros
            <span className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </a>
        </div>
      </section>
  );
};


export default Home;
