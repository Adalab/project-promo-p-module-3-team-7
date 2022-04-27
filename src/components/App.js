import logo from '../images/kawaiiPC-logo.png';
import logoSmall from '../images/kawaiiPC-logoSmall.png';
import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //OBJETO DATA
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    addPhoto: '',
    github: '',
    linkedin: '',
    phone: '',
  });

  //FUNCIÓN PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  //FUNCIÓN VALOR INPUT
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });
  };

  //PINTAR PALETAS

  const handlePalettes = (ev) => {
    const value = ev.target.value;
    setDataCard({
      ...dataCard,
      palette: value,
    });
  };

  //FUNCIÓN COLAPSABLES
  const [arrowRotate, setArrowRotate] = useState('');
  const [sectionDesign, setSectionDesign] = useState('');
  const handleCollapsed = (ev) => {
    ev.preventDefault();
    const id = ev.currentTarget.id;
    if (id === 'designLegend') {
      setArrowRotate('rotate');
      setSectionDesign('collapsed');
    }
  };

  //FUNCIÓN RESET DATA
  const handleReset = () => {
    const dataCard = {
      palette: 1,
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: '',
    };

    setDataCard({ ...dataCard });
  };

  return (
    <>
      {/* HEADER */}

      <header className="header">
        <a href="#bottom" title="¡Volver al inicio!" rel="noreferrer">
          <img
            src={logo}
            alt="Awesome profile-cards"
            className="imageAwesome"
          />
        </a>
      </header>

      <main className="mainCreate">
        {/* TARJETA */}

        <section className="preview">
          <article>
            <button className="card__reset js_reset" onClick={handleReset}>
              <i className="card__icon far fa-trash-alt"></i>Reset
            </button>

            <div
              className={`palette-${dataCard.palette} containerCard js_preview`}
            >
              <div className="cardInfo js_cardInfo">
                <h2 className="cardInfo__name js_cardName">
                  {' '}
                  {dataCard.name || 'Nombre y apellidos'}
                </h2>

                <p className="cardInfo__description js_cardJob">
                  {dataCard.job || 'Front-end developer'}
                </p>
              </div>

              <div className="cardImage js__profile-image"></div>

              <nav>
                <ul className="cardMenu">
                  <li className="cardMenu__icon">
                    <a
                      href="#bottom"
                      className="cardMenu__link js_cardPhone js_cardLink"
                      rel="noreferrer"
                      target="_blank"
                      title="Número de teléfono"
                    >
                      <i className="icon fas fa-mobile-alt"></i>
                    </a>
                  </li>
                  <li className="cardMenu__icon">
                    <a
                      href="#bottom"
                      className="cardMenu__link js_cardEmail js_cardLink"
                      target="_blank"
                      title="Dirección de correo"
                    >
                      <i className="icon far fa-envelope"></i>
                    </a>
                  </li>
                  <li className="cardMenu__icon">
                    <a
                      href="#bottom"
                      className="cardMenu__link js_cardLinkedin js_cardLink"
                      target="_blank"
                      title="Perfil en LinkedIn"
                      rel="noreferrer"
                    >
                      <i className="icon fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="cardMenu__icon">
                    <a
                      href="#bottom"
                      className="cardMenu__link js_cardGithub js_cardLink"
                      target="_blank"
                      title="Perfil de GitHub"
                      rel="noreferrer"
                    >
                      <i className="icon fab fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </article>
        </section>

        {/* FORMULARIO DISEÑA */}

        <form action="" className="form js_form" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend
              className="legend js_designLegend uppercase"
              id="designLegend"
              title="Elige los colores"
              onClick={handleCollapsed}
            >
              <i className="far fa-object-ungroup legend__icon legend__icon--orange"></i>
              <span className="legend__text">Diseña</span>
              <i
                className={`fas fa-angle-up legend__icon legend__icon--arrow js_arrowDesign ${arrowRotate}`}
              ></i>
            </legend>
            <section className={`containerDesign js_design ${sectionDesign}`}>
              <h2 className="containerDesign__title">Colores</h2>
              <div className="containerDesign__options">
                <div className="options__palette">
                  {/* PALETAS */}

                  <input
                    className="radio js_radio-1 js_radio"
                    name="palette"
                    type="radio"
                    id="radio1"
                    value="1"
                    onChange={handlePalettes}
                    checked={dataCard.palette === '1'}
                  />

                  <label
                    htmlFor="radio1"
                    className="palette__sample palette__sample--1"
                  ></label>

                  <label
                    htmlFor="radio1"
                    className="palette__sample palette__sample--2"
                  ></label>

                  <label
                    htmlFor="radio1"
                    className="palette__sample palette__sample--3"
                  ></label>
                </div>

                <div className="options__palette">
                  <input
                    className="radio js_radio-2"
                    name="palette"
                    type="radio"
                    id="radio2"
                    value="2"
                    onChange={handlePalettes}
                    checked={dataCard.palette === '2'}
                  />

                  <label
                    htmlFor="radio2"
                    className="palette__sample palette__sample--4"
                  ></label>

                  <label
                    htmlFor="radio2"
                    className="palette__sample palette__sample--5"
                  ></label>

                  <label
                    htmlFor="radio2"
                    className="palette__sample palette__sample--6"
                  ></label>
                </div>

                <div className="options__palette">
                  <input
                    className="radio js_radio-3"
                    name="palette"
                    type="radio"
                    id="radio3"
                    value="3"
                    onChange={handlePalettes}
                    checked={dataCard.palette === '3'}
                  />

                  <label
                    htmlFor="radio3"
                    className="palette__sample palette__sample--7"
                  ></label>

                  <label
                    htmlFor="radio3"
                    className="palette__sample palette__sample--8"
                  ></label>

                  <label
                    htmlFor="radio3"
                    className="palette__sample palette__sample--9"
                  ></label>
                </div>
              </div>
            </section>
          </fieldset>

          {/* FORMULARIO RELLENA */}

          <fieldset className="fieldset">
            <legend
              className="legend js_fillLegend uppercase"
              id="fillLegend"
              title="Escribe tus datos"
              onClick={handleCollapsed}
            >
              <i className="far fa-keyboard legend__icon legend__icon--orange"></i>
              <span className="legend__text">Rellena</span>
              <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowFill"></i>
            </legend>
            <div className="containerFill js_fill">
              <label className="label" htmlFor="name">
                Nombre completo
              </label>
              <input
                className="field js_name"
                name="name"
                type="text"
                id="name"
                placeholder="P. ej. Usagi Tsukino"
                onChange={handleInput}
                value={dataCard.name}
              />

              <label className="label" htmlFor="job">
                Puesto
              </label>
              <input
                className="field js_job"
                name="job"
                type="text"
                id="job"
                placeholder="P. ej. Pretty Guardian"
                onChange={handleInput}
                value={dataCard.job}
              />

              <label className="label" htmlFor="">
                Imagen de perfil
              </label>
              <div className="component">
                <label
                  className="component__btnAddImage js__profile-trigger"
                  type="button"
                  htmlFor="addPhoto"
                >
                  Añadir imagen
                </label>
                <input
                  className="action__hiddenField js__profile-upload-btn js_photo"
                  type="file"
                  name="addPhoto"
                  id="addPhoto"
                  onChange={handleInput}
                  value={dataCard.photo}
                />

                <div className="component__square js__profile-preview"></div>
              </div>

              <label className="label" htmlFor="email">
                E-mail
              </label>
              <input
                className="field js_email"
                name="email"
                type="email"
                id="email"
                placeholder="P. ej. rei-hino@sailor.mars"
                onChange={handleInput}
                value={dataCard.email}
              />

              <label className="label" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="field js_phone"
                name="phone"
                type="tel"
                id="phone"
                placeholder="P. ej. 987 654 321"
                onChange={handleInput}
                value={dataCard.phone}
              />

              <label className="label" htmlFor="linkedin">
                LinkedIn
              </label>
              <input
                className="field js_linkedin"
                name="linkedin"
                type="text"
                id="linkedin"
                placeholder="P. ej. ami.mizuno"
                onChange={handleInput}
                value={dataCard.linkedin}
              />

              <label className="label" htmlFor="github">
                GitHub
              </label>
              <input
                className="field js_github"
                name="github"
                type="text"
                id="github"
                placeholder="P. ej. chibiusa"
                onChange={handleInput}
                value={dataCard.github}
              />
            </div>
          </fieldset>

          {/* FORMULARIO COMPARTE */}

          <fieldset className="fieldset">
            <legend
              className="legend js_shareLegend uppercase"
              id="shareLegend"
              title="¡Comparte tu tarjeta!"
              onClick={handleCollapsed}
            >
              <i className="fa-solid fa-share-nodes legend__icon legend__icon--orange"></i>
              <span className="legend__text">Comparte</span>
              <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowShare rotate"></i>
            </legend>
            <div className="containerShare js_share">
              <button className="buttonCreateCard uppercase js_buttonCreateCard">
                <i className="fa-regular fa-address-card buttonCreateCard__icon"></i>
                Crear tarjeta
              </button>

              <div className="containerDone js_containerDone collapsed"></div>
            </div>
          </fieldset>
        </form>
      </main>
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
      <p id="bottom"></p>
    </>
  );
}

export default App;
