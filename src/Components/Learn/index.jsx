import React, { useState } from 'react';
import './style.css';
import letterObjects from '../../letterObjects.js';

const Learn = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [randomIndex] = useState(
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
            className="slide-in-left"
            src={letterObjects[randomIndex].letter.uppercase}
            alt=""
          />
        )}
      </div>
    </>
  );
};

export default Learn;

//  <Header><Zvuk><OdkazNaHome><Restart onRestart={handleRestart}></Header>
