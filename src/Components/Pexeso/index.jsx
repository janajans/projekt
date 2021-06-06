import React, { useState, useEffect } from 'react';
import letterObjects from '../../letterObjects';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';
import './style.css';
import { shuffledIndexes as shuffle } from '../../Util/arrayShuffler';

const Pexeso = () => {
  const [randomIndexes] = useState(randomIndexesGenerator(3));
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [shuffledIndexes, setSchufledIndexes] = useState([]);

  useEffect(() => {
    setSchufledIndexes(shuffle(randomIndexes));
  }, []);
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
          {shuffledIndexes.map((index) => {
            const selected = index === selectedLetter;
            return (
              <img
                className={
                  selected ? 'pexeso-item pexeso-item-selected' : 'pexeso-item'
                }
                src={letterObjects[index].letter.uppercase}
                alt=""
                key={index}
                onClick={() => {
                  setSelectedLetter(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Pexeso;
