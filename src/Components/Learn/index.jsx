import React from 'react';
import './style.css';
import bus from './img/autobus.png';
import Header_long from '../Header/Header_long';

const Learn = () => (
  <>
    <Header_long />
    <div className="container--learn">
      <img id="bus" src={bus} alt="picture of a bus" />
    </div>
  </>
);

export default Learn;

//  <Header><Zvuk><OdkazNaHome><Restart onRestart={handleRestart}></Header>
