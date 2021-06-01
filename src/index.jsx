import React from 'react';
import { render } from 'react-dom';
import Home from './Home/index';
import './style.css';

const App = () => (
  <>
    <Home />;
  </>
);
render(<App />, document.querySelector('#app'));
