import React from 'react';
import { Link } from 'react-router-dom';

import learnPicture from './img/poketacek-learn.svg';
import playPicture from './img/poketacek-play.svg';
import './style.css';

const Home = () => {
  return (
    <>
      <div className="container--home">
        <Link to="/learn">
          <img id="poketacek-learn" src={learnPicture} alt="ikonka učit se" />
        </Link>
        <Link to="/dragdrop">
          <img id="poketacek-play" src={playPicture} alt="ikonka hrát si" />
        </Link>
      </div>
    </>
  );
};

export default Home;

// //  <Header><Zvuk><OdkazNaHome><Restart onRestart={handleRestart}></Header>
