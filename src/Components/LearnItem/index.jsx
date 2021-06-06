import React, { useState } from 'react';
import './style.css';
import letterObjects from '../../letterObjects.js';

const LearnItem = ({ randomIndex }) => {
  const [showLetter, setShowLetter] = useState(false);

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
    </>
  );
};

export default LearnItem;
