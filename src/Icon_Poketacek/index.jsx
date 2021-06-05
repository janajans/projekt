import React from 'react';
import './style.css';
import icon_poketacek from './img/poketacek-prozatimni.png';

const Icon_Poketacek = () => {
  let audio = new Audio('../assets/sounds/success.wav');

  const start = () => {
    audio.play();
  };

  return (
    <img
      id="icon_poketacek"
      src={icon_poketacek}
      alt="mascot Poketacek"
      onClick={start}
    />
  );
};

export default Icon_Poketacek;
