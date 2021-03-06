import './style.css';
import React from 'react';

export const ProgressBar = ({ numberOfLevels, currentLevel }) => {
  const classes = [];

  for (let i = 0; i < currentLevel; i += 1) {
    classes.push('bar bar-done');
  }

  for (let i = 0; i < numberOfLevels - currentLevel; i += 1) {
    classes.push('bar');
  }
  return (
    <div className="bar-container">
      {classes.map((bar, index) => (
        <div key={index + numberOfLevels} className={bar}></div>
      ))}
    </div>
  );
};
