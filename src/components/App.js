import { useState } from 'react';
import Header from './Header';
import dataApi from '../services/Api';
import CardPreview from './CardPreview';
import Footer from './Footer';
import Card from './Card';

function App() {
  // //OBJETO DATA
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    photo:
      'https://st.depositphotos.com/1376300/2455/i/600/depositphotos_24559761-stock-photo-idyllic-white-beach-in-front.jpg',
    github: '',
    linkedin: '',
    phone: '',
  });

  //CONSTANTE APIDATA

  const [apiData, setApiData] = useState({});
  const handleClickCreateCard = () => {
    dataApi(dataCard).then((info) => {
      setApiData(info);
    });
  };

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

  const handlePalettes = (data) => {
    const value = data.value;
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
      <Header />
      <Card
        dataCard={dataCard}
        handlePalettes={handlePalettes}
        handleInput={handleInput}
        handleClickCreateCard={handleClickCreateCard}
        apiData={apiData}
      />

      <Footer />
    </>
  );
}

export default App;
