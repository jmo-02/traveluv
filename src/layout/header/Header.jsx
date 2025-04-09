import { NavLink } from "react-router";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="logo" >
        <FontAwesomeIcon icon={faMountainSun} /> Traveluv
      </div>
      <nav className="content-nav">
      <NavLink to="/" className="nav-item">
          Inicio
        </NavLink>
        <NavLink to="/como-funciona" className="nav-item">
          ¿Como Funciona?
        </NavLink>
        <NavLink to="/acerca-de-nosotros" className="nav-item">
          Acerca de nosotros
        </NavLink>
      </nav>
      <a href="/iniciar-sesion" className="button-login">
        Iniciar Sesion
      </a>
    </header>
  ); 
};

export default Header;
