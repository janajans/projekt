import React, { useContext } from 'react';
import SoundProvider, { SoundContext } from '../../../Providers/SoundContext';
import Icon_Home from '../Icon_Home';
import Icon_Poketacek from '../Icon_Poketacek';
import Icon_Restart from '../Icon_Restart';
import Icon_Sound from '../Icon_Sound';
import Icon_PlayOptions from '../Icon_PlayOptions';
import './style.css';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const { soundOn, setSoundOn } = useContext(SoundContext);
  const location = useLocation();
  const isLong = location.pathname !== '/';
  const showRestartAndGameIcon =
    location.pathname === '/dragdrop' || location.pathname === '/pexeso';
  return (
    <>
      <header>
        <div className="header--left">
          <Icon_Poketacek />
        </div>
        <div className="header--right">
          {showRestartAndGameIcon && (
            <>
              <Icon_Restart />
              <Link to="/play">
                <Icon_PlayOptions />
              </Link>
            </>
          )}
          <Icon_Sound
            on={soundOn}
            onClick={() => {
              setSoundOn((value) => !value);
            }}
          />
          {isLong && <Icon_Home />}
        </div>
      </header>
    </>
  );
};

export default Header;
