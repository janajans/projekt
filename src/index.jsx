import React from 'react';
import { render } from 'react-dom';

import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DragAndDrop from './Components/DragAndDrop/index';
import Learn from './Components/Learn';
import Footer from './Components/Footer';
import Home from './Components/Home';
import SoundProvider from './Providers/SoundContext';
import Header from './Components/Header/Header';

const App = () => (
  <SoundProvider>
    <Router>
      <Header />
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
  </SoundProvider>
);

render(<App />, document.querySelector('#app'));
