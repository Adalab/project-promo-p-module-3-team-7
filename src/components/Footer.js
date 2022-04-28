import FooterStyles from '../styles/layout/Footer.scss';
import Variables from '../styles/core/_variables.scss';

const Footer = (props) => {
    return (
        <footer className="footer">
        <small className="small_text">Kawaii profile-cards &copy; 2022</small>
        <a
          href="https://adalab.es/"
          title="Visita Adalab"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img_logo" src={props.logoSmall} alt="Logo Adalab" />
        </a>
      </footer>
   
   )}

export default Footer;