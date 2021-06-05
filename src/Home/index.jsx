import React from 'react';
import { Link } from 'react-router-dom';
import Header_short from '../Header_short';
import learnPicture from './img/poketacek-learn.svg';
import playPicture from './img/poketacek-play.svg';
import './style.css';

const Home = () => {
  return (
    <>
      <Header_short />
      <div className="container--home">
        <Link to="/learn">
          <img id="poketacek-learn" src={learnPicture} alt="ikonka učit se" />
        </Link>
        <Link to="/play">
          <img id="poketacek-play" src={playPicture} alt="ikonka hrát si" />
        </Link>
      </div>
    </>
  );
};

export default Home;

// //  <Header><Zvuk><OdkazNaHome><Restart onRestart={handleRestart}></Header>
