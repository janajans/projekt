import React from 'react';
import '../Header/style.css';
import icon_restart from './img/icon_restart.svg';

const Icon_Restart = () => (
  <>
    <div className="wrapper">
      <img
        className="header-icon header-icon--restart"
        src={icon_restart}
        alt="icon of restart"
        onClick={() => {
          window.location.reload();
        }}
      />
    </div>
  </>
);

export default Icon_Restart;
