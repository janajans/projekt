import React, { useState } from 'react';
import './style.css';
import letterObjects from '../../letterObjects.js';
import arrowRight from './img/arrowRight.png';

const Learn = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * letterObjects.length),
  );

  return (
    <>
      <div className="container-learning">
        <img
          className="learning-image"
          src={letterObjects[randomIndex].picture.image}
          alt=""
          onClick={() => {
            setShowLetter((value) => !value);
          }}
        />
        {showLetter && (
          <img
            className="learning-image slide-in-left"
            src={letterObjects[randomIndex].letter.uppercase}
            alt=""
          />
        )}
      </div>
      <img
        id="arrow-right"
        src={arrowRight}
        alt="arrow to the right"
        onClick={() => {
          setRandomIndex(Math.floor(Math.random() * letterObjects.length));
          setShowLetter(false);
        }}
      />
    </>
  );
};

export default Learn;

//  <Header><Zvuk><OdkazNaHome><Restart onRestart={handleRestart}></Header>
