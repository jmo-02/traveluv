import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className = "footer"> 
      <ul > 
        <li> 
          <Link to="/viaja/comunidad" >Comunidad</Link>
        </li>
        <li >
          <Link to="/viaja/seguridad">Seguridad</Link>
        </li>
        <li >
          <Link to="/viaja/soporte" >Soporte</Link>
        </li>
        <li >
          <Link to="/viaja/logistica" >Logistica</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

{/*style={{ listStyle: 'none', padding: 20, margin: 20, display: 'flex', justifyContent: 'center' }}*/}