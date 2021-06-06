import './style.css';
import React from 'react';

export const ProgressBar = ({ numberOfLevels, currentLevel }) => {
  const widthRatio = Math.floor((currentLevel / numberOfLevels) * 100) + '%';
  console.log(widthRatio);
  return (
    <>
      <div className="bar-container">
        <div
          className="progress-line"
          style={{ width: widthRatio, backgroundColor: 'green' }}
        ></div>
      </div>
    </>
  );
};
