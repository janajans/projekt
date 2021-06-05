import React from 'react';
import { render } from 'react-dom';

import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Play from './Play/index';
import DragAndDrop from './Components/DragAndDrop/index';
import Learn from './Components/Learn';
import Footer from './Components/Footer';
import Home from './Components/Home';

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
