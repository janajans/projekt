import React, { useState, useEffect } from 'react';
import LearnItem from '../LearnItem/index';
import arrowRight from './img/arrowRight.svg';
import arrowLeft from './img/arrowLeft.svg';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';
import './style.css';

const Learn = () => {
  const [history, setHistory] = useState([randomIndexesGenerator(3)]);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    setCurrentPosition(history.length - 1);
  }, [history]);
  console.log(history, currentPosition);

  return (
    <>
      <div className="container-content--learn">
        <div className="container-learn">
          {history[currentPosition].map((index) => {
            return <LearnItem key={index} randomIndex={index} />;
          })}
        </div>
        <div className="arrows-container">
          <div className="arrow-container--left">
            {currentPosition !== 0 && (
              <img
                id="arrow-left"
                src={arrowLeft}
                alt="arrow to the left"
                onClick={() => {
                  setCurrentPosition(currentPosition - 1);
                }}
              />
            )}
          </div>
          <div className="arrow-container--right">
            <img
              id="arrow-right"
              src={arrowRight}
              alt="arrow to the right"
              onClick={() => {
                if (currentPosition === history.length - 1) {
                  const nextLevel = randomIndexesGenerator(3);
                  setHistory([...history, nextLevel]);
                } else {
                  setCurrentPosition(currentPosition + 1);
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
