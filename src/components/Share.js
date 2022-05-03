import '../styles/components/Share.scss';

function Share(props) {
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    props.handleClickCreateCard();
  };
  const handleCollapsed = (ev) => {
    props.handleCollapsed();
  };

  return (
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
        <button
          className="buttonCreateCard uppercase js_buttonCreateCard"
          onClick={handleClickCreateCard}
        >
          <i className="fa-regular fa-address-card buttonCreateCard__icon"></i>
          Crear tarjeta
        </button>

        <div className="containerDone js_containerDone ">
          {/* <a href={`${props.apiData.cardURL}`}> {props.apiData.cardURL} </a> */}
        </div>
      </div>
    </fieldset>
  );
}
export default Share;
