import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Play from '../Play/index';
import learnPicture from '../img/learn.png';
import playPicture from '../img/play.png';
import Learn from '../Learn';

const Home = () => {
  return (
    <>
      <Router>
        <Link to="/learn">
          <img src={learnPicture} alt="ikonka učit se" />
        </Link>
        <Link to="/play">
          <img src={playPicture} alt="ikonka hrát si" />
        </Link>
        <p>Jsem domovská stránka</p>
        <main>
          {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/learn">
              <Learn />
            </Route>
            <Route path="/play">
              <Play />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default Home;
