import React from 'react';
import './style.css';
import icon_home from './img/icon_home.svg';
import { Link } from 'react-router-dom';

const Icon_Home = () => (
  <>
    <Link to="/">
      <div className="wrapper">
        <img id="icon_home" src={icon_home} alt="home icon" />
      </div>
    </Link>
  </>
);

export default Icon_Home;
