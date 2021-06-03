import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Play from '../Play/index';
import learnPicture from '../img/learn.png';
import playPicture from '../img/play.png';
import Learn from '../Learn';

const Home = () => {
  return (
    <>
      <Link to="/learn">
        <img src={learnPicture} alt="ikonka učit se" />
      </Link>
      <Link to="/play">
        <img src={playPicture} alt="ikonka hrát si" />
      </Link>
      <p>Jsem domovská stránka</p>
    </>
  );
};

export default Home;
