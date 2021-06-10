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
      <div className="container-learning">
        <img
          className="learning-image"
          src={letterObjects[randomIndex].picture.image}
          alt="a picture of a thing begining at the same letter as one of the letters shown under the picture"
          onClick={() => {
            setShowLetter((value) => !value);
            if (soundOn) {
              audioPictures.play();
            }
          }}
        />
        {showLetter && (
          <img
            className="learning-image slide-in-left"
            src={letterObjects[randomIndex].letter.uppercase}
            alt="a letter of the Czech alphabet"
            onClick={() => {
              if (soundOn) {
                audioLetters.play();
                setTimeout(() => {
                  setShowLetter(false);
                }, 8000);
              }
            }}
          />
        )}
      </div>
    </>
  );
};

export default LearnItem;
