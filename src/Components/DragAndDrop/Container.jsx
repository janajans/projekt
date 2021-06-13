import React, { useState, useEffect } from 'react';
import { Target } from './Target/Target';
import { Option } from './Option/Option';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';
import { ProgressBar } from '../ProgressBar';
import WinningPage from '../WinningPage';
import { options } from './Target/Target';

const initRandomInd = randomIndexesGenerator(3);
let numberOfLevels = 5;

export const Container = () => {
  const [arrayOfIndexes, setArrayOfIndexes] = useState(initRandomInd);
  const [isSuccess, setIsSuccess] = useState(options.default);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [indexValid, setIndexValid] = useState(initRandomInd[0]);
  const [shuffledIndexes, setShuffledIndexes] = useState(
    [...initRandomInd].sort(() => Math.floor(Math.random() * 3)),
  );

  useEffect(() => {
    if (indexValid !== arrayOfIndexes[0]) {
      setIndexValid(arrayOfIndexes[0]);
      setShuffledIndexes([...arrayOfIndexes].sort(() => Math.random() - 0.5));
    }
  }, [arrayOfIndexes]);

  useEffect(() => {
    if (isSuccess === options.success) {
      setTimeout(() => {
        const randomInd = randomIndexesGenerator(3);
        setArrayOfIndexes(randomInd);
      }, 1000);
    }
  }, [isSuccess]);

  const dropHandler = (itemIndex) => {
    if (indexValid !== itemIndex) {
      setIsSuccess(options.unsuccess);
      console.log('currentLevel: ', currentLevel);
    } else {
      setIsSuccess(options.success);
      setCurrentLevel(currentLevel + 1);
    }
    setTimeout(() => setIsSuccess(options.default), 500);
  };

  if (currentLevel < numberOfLevels) {
    return (
      <div className="container-content--dnd">
        <ProgressBar
          numberOfLevels={numberOfLevels}
          currentLevel={currentLevel}
        />

        <Target
          key={indexValid}
          onDrop={dropHandler}
          index={indexValid}
          success={isSuccess}
        />

        <div className="options-container">
          {shuffledIndexes.map((index) => (
            <div key={index} className="option-container">
              <Option index={index} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <WinningPage />;
  }
};
