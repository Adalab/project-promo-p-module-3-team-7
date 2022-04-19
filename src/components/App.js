import logo from '../images/kawaiiPC-logo.png';
import logoSmall from '../images/kawaiiPC-logoSmall.png';
import '../styles/App.scss';

function App() {
  return (
    <>
      <header className="header">
        <a href="./index.html" title="¡Volver al inicio!" rel="noreferrer">
          <img
            src={logo}
            alt="Awesome profile-cards"
            className="imageAwesome"
          />
        </a>
      </header>
      <main className="mainCreate">
        <section className="preview">
          <article>
            <button className="card__reset js_reset">
              <i className="card__icon far fa-trash-alt"></i>Reset
            </button>
            {/* ksksks */}
            <div className="palette-1 containerCard js_preview">
              <div className="cardInfo js_cardInfo">
                <h2 className="cardInfo__name js_cardName">Nombre apellidos</h2>
                <p className="cardInfo__description js_cardJob">
                  Front-end developer
                </p>
              </div>

              <div className="cardImage js__profile-image"></div>

              <nav>
                <ul className="cardMenu">
                  <li className="cardMenu__icon">
                    <a
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
                      className="cardMenu__link js_cardEmail js_cardLink"
                      target="_blank"
                      title="Dirección de correo"
                    >
                      <i className="icon far fa-envelope"></i>
                    </a>
                  </li>
                  <li className="cardMenu__icon">
                    <a
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

        <form action="" className="form js_form">
          <fieldset className="fieldset">
            <legend
              className="legend js_designLegend uppercase"
              id="designLegend"
              title="Elige los colores"
            >
              <i className="far fa-object-ungroup legend__icon legend__icon--orange"></i>
              <span className="legend__text">Diseña</span>
              <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowDesign"></i>
            </legend>
            <section className="containerDesign js_design">
              <h2 className="containerDesign__title">Colores</h2>
              <div className="containerDesign__options">
                <div className="options__palette">
                  <input
                    className="radio js_radio-1 js_radio"
                    name="palette"
                    type="radio"
                    id="radio1"
                    value="1"
                    checked
                  />

                  <label
                    for="radio1"
                    className="palette__sample palette__sample--1"
                  ></label>

                  <label
                    for="radio1"
                    className="palette__sample palette__sample--2"
                  ></label>

                  <label
                    for="radio1"
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
                  />

                  <label
                    for="radio2"
                    className="palette__sample palette__sample--4"
                  ></label>

                  <label
                    for="radio2"
                    className="palette__sample palette__sample--5"
                  ></label>

                  <label
                    for="radio2"
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
                  />

                  <label
                    for="radio3"
                    className="palette__sample palette__sample--7"
                  ></label>

                  <label
                    for="radio3"
                    className="palette__sample palette__sample--8"
                  ></label>

                  <label
                    for="radio3"
                    className="palette__sample palette__sample--9"
                  ></label>
                </div>

                <div className="options__palette">
                  <input
                    className="radio js_radio-4"
                    name="palette"
                    type="radio"
                    id="radio4"
                    value="4"
                  />

                  <label
                    for="radio4"
                    className="palette__sample palette__sample--10"
                  ></label>

                  <label
                    for="radio4"
                    className="palette__sample palette__sample--11"
                  ></label>

                  <label
                    for="radio4"
                    className="palette__sample palette__sample--12"
                  ></label>
                </div>
              </div>
            </section>
          </fieldset>

          <fieldset className="fieldset">
            <legend
              className="legend js_fillLegend uppercase"
              id="fillLegend"
              title="Escribe tus datos"
            >
              <i className="far fa-keyboard legend__icon legend__icon--orange"></i>
              <span className="legend__text">Rellena</span>
              <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowFill rotate"></i>
            </legend>
            <div className="containerFill js_fill collapsed">
              <label className="label" for="name">
                Nombre completo
              </label>
              <input
                className="field js_name"
                name="name"
                type="text"
                id="name"
                placeholder="P. ej. Usagi Tsukino"
              />

              <label className="label" for="job">
                Puesto
              </label>
              <input
                className="field js_job"
                name="job"
                type="text"
                id="job"
                placeholder="P. ej. Pretty Guardian"
              />

              <label className="label" for="">
                Imagen de perfil
              </label>
              <div className="component">
                <label
                  className="component__btnAddImage js__profile-trigger"
                  type="button"
                  for="addPhoto"
                >
                  Añadir imagen
                </label>
                <input
                  className="action__hiddenField js__profile-upload-btn js_photo"
                  type="file"
                  name="addPhoto"
                  id="addPhoto"
                />

                <div className="component__square js__profile-preview"></div>
              </div>

              <label className="label" for="email">
                E-mail
              </label>
              <input
                className="field js_email"
                name="email"
                type="email"
                id="email"
                placeholder="P. ej. rei-hino@sailor.mars"
              />

              <label className="label" for="phone">
                Teléfono
              </label>
              <input
                className="field js_phone"
                name="phone"
                type="tel"
                id="phone"
                placeholder="P. ej. 987 654 321"
              />

              <label className="label" for="linkedin">
                LinkedIn
              </label>
              <input
                className="field js_linkedin"
                name="linkedin"
                type="text"
                id="linkedin"
                placeholder="P. ej. ami.mizuno"
              />

              <label className="label" for="github">
                GitHub
              </label>
              <input
                className="field js_github"
                name="github"
                type="text"
                id="github"
                placeholder="P. ej. chibiusa"
              />
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend
              className="legend js_shareLegend uppercase"
              id="shareLegend"
              title="¡Comparte tu tarjeta!"
            >
              <i className="fa-solid fa-share-nodes legend__icon legend__icon--orange"></i>
              <span className="legend__text">Comparte</span>
              <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowShare rotate"></i>
            </legend>
            <div className="containerShare js_share collapsed">
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
    </>
  );
}

export default App;
