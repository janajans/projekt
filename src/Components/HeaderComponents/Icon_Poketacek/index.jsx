import React, { useContext } from 'react';
import icon_poketacek from './img/poketacek-prozatimni.png';
import SoundProvider, { SoundContext } from '../../../Providers/SoundContext';
import '../Header/style.css';

const Icon_Poketacek = () => {
  const { soundOn, setSoundOn } = useContext(SoundContext);
  let audioAhojVyber = new Audio(
    '../../assets/sounds/soundsOfPoketacek/ahojVyber.mp3',
  );
  return (
    <img
      className="header-icon"
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
