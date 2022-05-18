import { useState } from 'react';
import Header from './Header';
import dataApi from '../services/Api';
import Footer from './Footer';
import Card from './Card';

import localStorage from '../services/localStorage';

function App() {
  // //OBJETO DATA

  const [avatar, setAvatar] = useState('');

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
  const handleInput = (inputValue, inputChanged) => {
    const newCard = {
      ...dataCard,
      [inputChanged]: inputValue,
    };

    setDataCard(newCard);
    localStorage.set('dataCard', newCard);
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
    // ev.preventDefault();
    const id = ev.currentTarget.id;

    if (id === 'designLegend') {
      console.log(id);
      setArrowRotate('rotate');
      setSectionDesign('collapsed');
    }
  };

  //FUNCIÓN RESET DATA
  const handleReset = (ev) => {
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: '',
    });
    setAvatar('');
  };

  const updateAvatar = (avatar) => {
    setDataCard({
      ...dataCard,
      photo: avatar,
    });
  };

  // setDataCard({ ...dataCard });
  return (
    <>
      <Header />
      <Card
        dataCard={dataCard}
        handlePalettes={handlePalettes}
        handleInput={handleInput}
        handleClickCreateCard={handleClickCreateCard}
        apiData={apiData}
        handleSubmit={handleSubmit}
        handleCollapsed={handleCollapsed}
        arrowRotate={arrowRotate}
        sectionDesign={sectionDesign}
        handleReset={handleReset}
        avatar={avatar}
        updateAvatar={updateAvatar}
      />

      <Footer />
    </>
  );
}

export default App;
