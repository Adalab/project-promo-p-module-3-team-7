import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import '../styles/components/Card.scss';

function Card(props) {
  const handleSubmit = (ev) => {
    props.handleSubmit();
  };
  return (
    <>
      {/* <Header  logo={logo} /> */}
      <main className="mainCreate">
        {/* TARJETA */}

        <CardPreview dataCard={props.dataCard} />

        <form action="" className="form js_form" onSubmit={handleSubmit}>
          {/* FORMULARIO DISEÑA */}
          <Design
            dataCard={props.dataCard}
            handlePalettes={props.handlePalettes}
            arrowRotate={props.arrowRotate}
            sectionDesign={props.sectionDesign}
          />

          {/* FORMULARIO RELLENA */}

          <Fill dataCard={props.dataCard} handleInput={props.handleInput} />

          {/* FORMULARIO COMPARTE */}

          <Share
            dataCard={props.dataCard}
            handlelickCreateCard={props.handlelickCreateCard}
          />
        </form>
      </main>
      {/* <Footer logoSmall={logoSmall}/> */}
      <p id="bottom"></p>
    </>
  );
}
export default Card;
