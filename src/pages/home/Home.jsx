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
            Comparti tu Viaje Optimiza tu Mundo
            </h3>
          <p>
          conecta conductores, pasajeros y remitentes de carga para un transporte más eficiente, ecológico y económico.
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
