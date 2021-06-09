import React from 'react';
import { Link } from 'react-router-dom';
import picture_letter from './img/picture-letter-game-icon.svg';
import pexeso from './img/pexeso-game-icon.svg';
import './style.css';

const Play = () => {
  return (
    <>
      <div className="container--play">
        <Link to="/dragdrop">
          <img className="picture-letter-icon" src={picture_letter} alt="" />
        </Link>
        <Link to="/pexeso">
          <img className="pexeso-icon" src={pexeso} alt="" />
        </Link>
      </div>
    </>
  );
};

export default Play;
