import React from 'react';
import '../Header/style.css';
import iconPlayOptions from './img/poketacek-play.svg';

const Icon_PlayOptions = () => (
  <div className="wrapper">
    <img
      className="header-icon"
      src={iconPlayOptions}
      alt="icon of playing poketacek"
    />
  </div>
);

export default Icon_PlayOptions;
