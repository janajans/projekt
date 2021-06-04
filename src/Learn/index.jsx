import React from 'react';
import './style.css';
import bus from './img/autobus.png';
import Header_short from '../Header_short';

const Learn = () => (
  <>
    <Header_short />
    <div className="container--learn">
      <img id="bus" src={bus} alt="picture of a bus" />
    </div>
  </>
);

export default Learn;

//  <Header><Zvuk><OdkazNaHome><Restart onRestart={handleRestart}></Header>
