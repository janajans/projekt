import React from 'react';
import letterObjects from '../../letterObjects';
import './style.css';

const DragAndDrop = () => {
  return (
    <>
      <div className="target">
        <img src={letterObjects[31].picture.image} alt="" />
      </div>

      <div className="options-container">
        <div className="option">
          <img src={letterObjects[22].letter.uppercase} alt="" />
        </div>

        <div className="option">
          <img src={letterObjects[2].letter.uppercase} alt="" />
        </div>

        <div className="option">
          <img src={letterObjects[31].letter.uppercase} alt="" />
        </div>
      </div>
    </>
  );
};

export default DragAndDrop;
