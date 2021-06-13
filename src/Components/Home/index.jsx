import React from 'react';
import { Link } from 'react-router-dom';

import learnPicture from './img/poketacek-learn.svg';
import playPicture from './img/poketacek-play.svg';
import './style.css';

const Home = () => {
  return (
    <>
      <div className="container-content--home">
        <Link to="/learn">
          <img id="poketacek-learn" src={learnPicture} alt="to learn icon" />
        </Link>{' '}
        <Link to="/play">
          <img id="poketacek-play" src={playPicture} alt="to play icon" />
        </Link>{' '}
      </div>
    </>
  );
};

export default Home;
