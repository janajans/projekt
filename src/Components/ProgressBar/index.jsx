import './style.css';
import React from 'react';

export const ProgressBar = ({ numberOfLevels, currentLevel }) => {
  const classes = [];

  for (let i = 0; i < currentLevel; i += 1) {
    classes.push('bar bar-done');
  }
  console.log(classes);

  for (let i = 0; i < numberOfLevels - currentLevel; i += 1) {
    classes.push('bar');
  }
  console.log(classes);
  return (
    <div className="bar-container">
      {classes.map((bar, id) => (
        <div key={id} className={bar}></div>
      ))}
    </div>
  );
};
