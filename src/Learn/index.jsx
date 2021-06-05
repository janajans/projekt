import React from 'react';
import './style.css';
import bus from '../assets/images/autobus.svg';
import Header_long from '../Header_long';

const Learn = () => {
  let audio = new Audio('../assets/sounds/failure.wav');

  const start = () => {
    audio.play();
  };
  return (
    <>
      <Header_long />
      <div className="container--learn">
        <img id="bus" src={bus} alt="picture of a bus" onClick={start} />
      </div>
    </>
  );
};

export default Learn;

//  <Header><Zvuk><OdkazNaHome><Restart onRestart={handleRestart}></Header>
