import React, { useContext } from 'react';
import './style.css';
import icon_poketacek from './img/poketacek-prozatimni.png';
import SoundProvider, { SoundContext } from '../../../Providers/SoundContext';

const Icon_Poketacek = () => {
  const { soundOn, setSoundOn } = useContext(SoundContext);
  let audioAhojVyber = new Audio('../../assets/sounds/ahojVyber.mp3');
  return (
    <img
      id="icon_poketacek"
      src={icon_poketacek}
      alt="mascot Poketacek"
      onClick={() => {
        if (soundOn) {
          audioAhojVyber.play();
        }
      }}
    />
  );
};

export default Icon_Poketacek;
