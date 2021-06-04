import React from 'react';
import Icon_Home from '../Icon_Home';
import Icon_Poketacek from '../Icon_Poketacek';
import Icon_Restart from '../Icon_Restart';
import Icon_Sound from '../Icon_Sound';
import './style.css';

const Header_long = () => (
  <>
    <header>
      <Icon_Poketacek />
      <Icon_Sound />
      <Icon_Restart />
      <Icon_Home />
    </header>
    ;
  </>
);

export default Header_long;
