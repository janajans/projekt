import React, { useState } from 'react';
import letterObjects from '../../letterObjects';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';
import './style.css';
import { shuffledIndexes } from '../../Util/arrayShuffler';

const Pexeso = () => {
  const [randomIndexes] = useState(randomIndexesGenerator(3));

  return (
    <>
      <div className="container-pexeso">
        <div className="pexeso-images">
          {randomIndexes.map((index) => (
            <img
              className="pexeso-item"
              src={letterObjects[index].picture.image}
              alt=""
              key={index}
            />
          ))}
        </div>
        <div className="pexeso-letters">
          {shuffledIndexes(randomIndexes).map((index) => (
            <img
              className="pexeso-item"
              src={letterObjects[index].letter.uppercase}
              alt=""
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Pexeso;
