//import logo from '../images/kawaiiPC-logo.png';
import '../styles/core/_variables.scss';

const Header = (props) => {
     return (
     <header className="header">
        <a href="#bottom" title="¡Volver al inicio!" rel="noreferrer">
          <img
            src={props.logo}
            alt="Awesome profile-cards"
            className="imageAwesome"
          />
        </a>
      </header>

     )} 


     export default Header;