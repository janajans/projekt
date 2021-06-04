import React from 'react';
import { render } from 'react-dom';
import Home from './Home/index';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Play from './Play/index';
import Learn from './Learn';
import Footer from './Footer';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route path="/learn">
          <Learn />
        </Route>
        <Route path="/play">
          <Play />
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
