import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className = "footer"> 
      <ul > 
        <li> 
          <Link to="/viaja/comunidad" ></Link>
        </li>
        <li >
          <Link to="/viaja/seguridad">Copyright@2025</Link>
        </li>
        <li >
          <Link to="/viaja/soporte" ></Link>
        </li>
        <li >
          <Link to="/viaja/logistica" ></Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

{/*style={{ listStyle: 'none', padding: 20, margin: 20, display: 'flex', justifyContent: 'center' }}*/}