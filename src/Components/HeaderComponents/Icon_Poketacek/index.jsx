import React from 'react';
import './style.css';
import icon_poketacek from './img/poketacek-prozatimni.png';

const Icon_Poketacek = () => {
  let audioAhojVyver = new Audio('../../assets/sounds/ahojVyber.mp3');
  return (
    <img
      id="icon_poketacek"
      src={icon_poketacek}
      alt="mascot Poketacek"
      onClick={() => {
        audioAhojVyver.play();
      }}
    />
  );
};

export default Icon_Poketacek;
