import React from 'react';
import { render } from 'react-dom';

import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Play from './Play/index';
import DragAndDrop from './Components/DragAndDrop/index';
import Footer from './Components/Footer';
import Home from './Components/Home';
import SoundProvider from './Providers/SoundContext';
import Header from './Components/HeaderComponents/Header';
import Pexeso from './Components/Pexeso';
import Play from './Components/Play';
import Learn from './Components/Learn';
import WinningPage from './Components/WinningPage';

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const App = () => (
  <SoundProvider>
    <Router>
      <Header />
      <Switch>
        <Route path="/learn">
          <Learn />
        </Route>
        <Route path="/play">
          <Play />
        </Route>
        <Route path="/dragdrop">
          <DragAndDrop />
        </Route>
        <Route path="/pexeso">
          <Pexeso />
        </Route>
        <Route path="/winning">
          <WinningPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </SoundProvider>
);
render(<App />, document.querySelector('#app'));
