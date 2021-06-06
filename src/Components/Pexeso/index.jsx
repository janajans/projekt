import React, { useState, useEffect, useContext } from 'react';
import { SoundContext } from '../../Providers/SoundContext';
import letterObjects from '../../letterObjects';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';
import './style.css';
import { shuffledIndexes as shuffle } from '../../Util/arrayShuffler';

const Pexeso = () => {
  const { soundOn } = useContext(SoundContext);
  const [randomIndexes, setRandomIndexes] = useState(randomIndexesGenerator(3));
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [shuffledIndexes, setShufledIndexes] = useState([]);
  const [correctPairs, setCorrectPairs] = useState([]);
  const [wrongLetter, setWrongLetter] = useState(null);
  const [wrongImage, setWrongImage] = useState(null);

  useEffect(() => {
    setShufledIndexes(shuffle(randomIndexes));
  }, []);

  useEffect(() => {
    if (selectedLetter === selectedImage && selectedLetter !== null) {
      const updatedArray = [selectedLetter, ...correctPairs];
      setCorrectPairs(updatedArray);
      setSelectedImage(null);
      setSelectedLetter(null);
    } else if (
      selectedLetter !== selectedImage &&
      selectedLetter !== null &&
      selectedImage !== null
    ) {
      setWrongImage(selectedImage);
      setWrongLetter(selectedLetter);
      setSelectedImage(null);
      setSelectedLetter(null);
    }
  }, [selectedLetter, selectedImage]);

  let audioSuccess = new Audio('../../assets/sounds/success.wav');
  useEffect(() => {
    if (
      selectedLetter === selectedImage &&
      selectedLetter !== null &&
      soundOn
    ) {
      audioSuccess.play();
    }
  }, [selectedLetter, selectedImage]);

  let audioFailure = new Audio('../../assets/sounds/failure.wav');
  useEffect(() => {
    if (
      selectedLetter !== selectedImage &&
      selectedLetter !== null &&
      selectedImage !== null &&
      soundOn
    ) {
      audioFailure.play();
    }
  }, [selectedLetter, selectedImage]);

  let audioApplause = new Audio('../../assets/sounds/applause.mp3');
  useEffect(() => {
    if (soundOn && correctPairs.length === 3) {
      audioApplause.play();
    }
    if (correctPairs.length === 3) {
      setTimeout(() => {
        const newRandomIndexes = randomIndexesGenerator(3);
        setRandomIndexes(newRandomIndexes);
        setShufledIndexes(shuffle(newRandomIndexes));
        setCorrectPairs([]);
      }, 4000);
    }
  }, [correctPairs]);

  return (
    <>
      <div className="container-pexeso">
        <div className="pexeso-images">
          {randomIndexes.map((index) => {
            const selected = index === selectedImage;
            const paired = correctPairs.includes(index);
            const wrong = wrongImage === index;
            const successful = correctPairs.length === 3;
            let className = 'pexeso-item';
            if (selected) {
              className += ' pexeso-item-selected';
            } else if (paired) {
              className += ' pexeso-item-paired';
            } else if (wrong) {
              className += ' pexeso-item-wrong';
            }
            if (successful) {
              className += ' pexeso-item-successful';
            }
            return (
              <img
                className={className}
                src={letterObjects[index].picture.image}
                alt="pexeso game card showing a picture"
                key={index}
                onClick={() => {
                  if (!paired) {
                    setSelectedImage(index);
                  }
                }}
              />
            );
          })}
        </div>
        <div className="pexeso-letters">
          {shuffledIndexes.map((index) => {
            const selected = index === selectedLetter;
            const paired = correctPairs.includes(index);
            const wrong = wrongLetter === index;
            const successful = correctPairs.length === 3;
            let className = 'pexeso-item';
            if (selected) {
              className += ' pexeso-item-selected';
            } else if (paired) {
              className += ' pexeso-item-paired';
            } else if (wrong) {
              className += ' pexeso-item-wrong';
            }
            if (successful) {
              className += ' pexeso-item-successful';
            }
            return (
              <img
                className={className}
                src={letterObjects[index].letter.uppercase}
                alt="pexeso game card showing a letter"
                key={index}
                onClick={() => {
                  if (!paired) {
                    setSelectedLetter(index);
                  }
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
