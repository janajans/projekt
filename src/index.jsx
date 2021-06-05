import React from 'react';
import { render } from 'react-dom';

import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Play from './Play/index';
import DragAndDrop from './Components/DragAndDrop/index';
import Learn from './Components/Learn';
import Footer from './Components/Footer';
import Home from './Components/Home';
<<<<<<< HEAD
import SoundProvider from './Providers/SoundContext';
import Header from './Components/HeaderComponents/Header';
=======
>>>>>>> 2da7efb6740cf1c757a71c6691ed1ad719ce8dfc

const App = () => (
  <>
    <Router>
      <Switch>
        <Route path="/learn">
          <Learn />
        </Route>
        <Route path="/dragdrop">
          <DragAndDrop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </>
);
render(<App />, document.querySelector('#app'));
