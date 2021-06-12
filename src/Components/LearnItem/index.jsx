import React, { useState, useContext, useEffect } from 'react';
import './style.css';
import letterObjects from '../../letterObjects.js';
import { SoundContext } from '../../Providers/SoundContext';

const LearnItem = ({ randomIndex }) => {
  const [showLetter, setShowLetter] = useState(false);
  const { soundOn } = useContext(SoundContext);

  let audioPictures = new Audio(letterObjects[randomIndex].picture.sound);
  let audioLetters = new Audio(letterObjects[randomIndex].letter.sound);

  return (
    <>
      <div className="container-learn__item">
        <img
          className="learn-image"
          src={letterObjects[randomIndex].picture.image}
          alt="a picture of a thing beginning with the same letter as one of the letters shown under the picture"
          onClick={() => {
            setShowLetter((value) => !value);
            if (soundOn) {
              audioPictures.play();
            }
            setTimeout(() => {
              setShowLetter(false);
            }, 4000);
          }}
        />
        {showLetter && (
          <img
            className="learn-image slide-in-left"
            src={letterObjects[randomIndex].letter.uppercase}
            alt="a letter of the Czech alphabet"
            onClick={() => {
              if (soundOn) {
                audioLetters.play();
              }
            }}
          />
        )}
      </div>
    </>
  );
};

export default LearnItem;
