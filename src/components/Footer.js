import '../styles/components/Footer.scss';
import logoSmall from '../images/kawaiiPC-logoSmall.png';

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
        <img className="img_logo" src={logoSmall} alt="Logo Adalab" />
      </a>
    </footer>
  );
};

export default Footer;
