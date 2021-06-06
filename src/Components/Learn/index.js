import React, { useState, Fragment, useEffect } from 'react';
import LearnItem from '../LearnItem/index';
import arrowRight from './img/arrowRight.png';
import arrowLeft from './img/arrowLeft.png';
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
    <Fragment>
      <div className="learn-items">
        {history[currentPosition].map((index) => {
          return <LearnItem key={index} randomIndex={index} />;
        })}
      </div>
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
    </Fragment>
  );
};

export default Learn;
