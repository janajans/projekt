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

  return (
    <div className="content-containter--winning">
      <object
        type="image/svg+xml"
        className="poketacek-animated"
        data={poketacek_loo}
      ></object>
    </div>
  );
};

export default WinningPage;
