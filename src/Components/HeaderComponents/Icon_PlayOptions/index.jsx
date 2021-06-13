import React from 'react';
import '../Header/style.css';
import iconPlayOptions from './img/icon_header_poketak_play.svg';

const Icon_PlayOptions = () => (
  <div className="wrapper">
    <img
      className="header-icon header-icon--play"
      src={iconPlayOptions}
      alt="icon of playing poketacek"
    />
  </div>
);

export default Icon_PlayOptions;
