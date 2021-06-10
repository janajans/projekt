import React from 'react';
import { Link } from 'react-router-dom';
import picture_letter from './img/picture-letter-game-icon.svg';
import pexeso from './img/pexeso-game-icon.svg';
import './style.css';

const Play = () => {
  return (
    <>
      <div className="container-content">
        <Link to="/dragdrop">
          <img
            className="picture-letter-icon"
            src={picture_letter}
            alt="drag adn drop game icon"
          />
        </Link>
        <Link to="/pexeso">
          <img className="pexeso-icon" src={pexeso} alt="pexeso game icon" />
        </Link>
      </div>
    </>
  );
};

export default Play;
