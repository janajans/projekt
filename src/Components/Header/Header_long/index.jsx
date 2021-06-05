import React from 'react';
import Icon_Home from '../Icon_Home';
import Icon_Poketacek from '../Icon_Poketacek';
import Icon_Restart from '../Icon_Restart';
import Icon_Sound from '../Icon_Sound';
import './style.css';

const Header_long = () => (
  <>
    <header>
      <div className="header--left">
        <Icon_Poketacek />
      </div>
      <div className="header--right">
        <Icon_Sound />
        <Icon_Restart />
        <Icon_Home />
      </div>
    </header>
    ;
  </>
);

export default Header_long;
