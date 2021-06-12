import React from 'react';
import '../Header/style.css';
import icon_home from './img/icon_home.svg';
import { Link } from 'react-router-dom';

const Icon_Home = () => (
  <>
    <Link to="/" className="header-link-container">
      <div className="wrapper">
        <img className="header-icon" src={icon_home} alt="home icon" />
      </div>
    </Link>
  </>
);

export default Icon_Home;
