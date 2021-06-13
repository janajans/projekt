import React from 'react';
import { SoundContext } from '../../Providers/SoundContext';
import poketacek_loo from './img/poketacek_loo.svg';
import './style.css';

const WinningPage = () => {
  const { soundOn } = useContext(SoundContext);

  let audioApplause = new Audio('../../assets/sounds/applause.mp3');
  if (soundOn) {
    audioApplause.play();
  }

  return (
    <object
      type="image/svg+xml"
      data={poketacek_loo}
      style={{ width: '200px' }}
    >
      svg-animation
    </object>
  );
};

export default WinningPage;
