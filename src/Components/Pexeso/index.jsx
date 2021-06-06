import React, { useState, useEffect } from 'react';
import letterObjects from '../../letterObjects';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';
import './style.css';
import { shuffledIndexes as shuffle } from '../../Util/arrayShuffler';

const Pexeso = () => {
  const [randomIndexes] = useState(randomIndexesGenerator(3));
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [shuffledIndexes, setShufledIndexes] = useState([]);
  const [correctPairs, setCorrectPairs] = useState([]);

  useEffect(() => {
    setShufledIndexes(shuffle(randomIndexes));
  }, []);

  useEffect(() => {
    if (selectedLetter === selectedImage && selectedLetter !== null) {
      const updatedArray = [selectedLetter, ...correctPairs];
      setCorrectPairs(updatedArray);
      setSelectedImage(null);
      setSelectedLetter(null);
    }
  }, [selectedLetter, selectedImage]);

  let audio = new Audio('../../assets/sounds/success.wav');
  useEffect(() => {
    console.log(correctPairs);
    if (correctPairs.length === 3) {
      audio.play();
      console.log('Play!');
    }
  }, [correctPairs]);

  return (
    <>
      <div className="container-pexeso">
        <div className="pexeso-images">
          {randomIndexes.map((index) => {
            const selected = index === selectedImage;
            const paired = correctPairs.includes(index);
            let className = 'pexeso-item';
            if (selected) {
              className += ' pexeso-item-selected';
            } else if (paired) {
              className += ' pexeso-item-paired';
            }
            return (
              <img
                className={className}
                src={letterObjects[index].picture.image}
                alt=""
                key={index}
                onClick={() => {
                  setSelectedImage(index);
                }}
              />
            );
          })}
        </div>
        <div className="pexeso-letters">
          {shuffledIndexes.map((index) => {
            const selected = index === selectedLetter;
            const paired = correctPairs.includes(index);
            let className = 'pexeso-item';
            if (selected) {
              className += ' pexeso-item-selected';
            } else if (paired) {
              className += ' pexeso-item-paired';
            }
            return (
              <img
                className={className}
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
