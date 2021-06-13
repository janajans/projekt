import React, { useContext } from 'react';
import { SoundContext } from '../../Providers/SoundContext';
import poketacek_loo from './img/poketacek_loo.svg';
import './style.css';

const WinningPage = () => {
  const { soundOn } = useContext(SoundContext);

  let audioApplause = new Audio('../../assets/sounds/applause.mp3');
  if (soundOn) {
    audioApplause.play();
  }
  setTimeout(() => {
    window.location.reload();
  }, 5000);

  return (
    <div className="container-content--winning">
      <object
        type="image/svg+xml"
        data={poketacek_loo}
        style={{ width: '200px' }}
      >
        svg-animation
      </object>
    </div>
  );
};

export default WinningPage;
