import React, { useState } from 'react';
import letterObjects from '../../letterObjects';
import './style.css';

const Pexeso = () => {
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * letterObjects.length),
  );

  return (
    <>
      <div className="container-pexeso">
        <div className="pexeso-images">
          <img
            className="pexeso-image"
            src={letterObjects[randomIndex].picture.image}
            alt=""
          />
          <img
            className="pexeso-image"
            src={letterObjects[randomIndex].picture.image}
            alt=""
          />
          <img
            className="pexeso-image"
            src={letterObjects[randomIndex].picture.image}
            alt=""
          />
        </div>
        <div className="pexeso-letters">
          <img
            className="pexeso-letter"
            src={letterObjects[randomIndex].letter.uppercase}
            alt=""
          />
          <img
            className="pexeso-letter"
            src={letterObjects[randomIndex].letter.uppercase}
            alt=""
          />
          <img
            className="pexeso-letter"
            src={letterObjects[randomIndex].letter.uppercase}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Pexeso;
