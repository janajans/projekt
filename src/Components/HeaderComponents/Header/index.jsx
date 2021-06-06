import React, { useContext } from 'react';
import SoundProvider, { SoundContext } from '../../../Providers/SoundContext';
import Icon_Home from '../Icon_Home';
import Icon_Poketacek from '../Icon_Poketacek';
import Icon_Restart from '../Icon_Restart';
import Icon_Sound from '../Icon_Sound';
import './style.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { soundOn, setSoundOn } = useContext(SoundContext);
  const location = useLocation();
  const isLong = location.pathname !== '/';
  const showRestartIcon =
    location.pathname === '/dragdrop' || location.pathname === '/pexeso';
  return (
    <>
      <header>
        <div className="header--left">
          <Icon_Poketacek />
        </div>
        <div className="header--right">
          <Icon_Sound
            on={soundOn}
            onClick={() => {
              setSoundOn((value) => !value);
            }}
          />
          {isLong && <Icon_Home />}
          {showRestartIcon && <Icon_Restart />}
        </div>
      </header>
      ;
    </>
  );
};

export default Header;
