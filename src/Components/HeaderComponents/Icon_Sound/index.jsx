import React from 'react';
import '../Header/style.css';
import icon_sound from './img/icon_sound.svg';
import icon_sound_off from './img/icon_sound_off.svg';

const Icon_Sound = ({ onClick, on }) => {
  if (on === true) {
    return (
      <div className="wrapper">
        <img
          className="header-icon header-icon--sound-on"
          src={icon_sound}
          alt="icon of sound on"
          onClick={onClick}
        />
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <img
          className="header-icon header-icon--sound-off"
          src={icon_sound_off}
          alt="icon of sound off"
          onClick={onClick}
        />
      </div>
    );
  }
};

export default Icon_Sound;
