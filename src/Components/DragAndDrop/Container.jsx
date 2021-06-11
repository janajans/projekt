import React, { useState } from 'react';
import { memo } from 'react';
import { Target } from './Target/Target';
import { Option } from './Option/Option';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';
import { ProgressBar } from '../ProgressBar';

export const Container = memo(function Container() {
  const [arrayOfIndexes, setArrayOfIndexes] = useState(
    randomIndexesGenerator(3),
  );
  const [indexValid, setIndexValid] = useState(arrayOfIndexes[0]);
  const [shuffledIndexes, setShuffledIndexes] = useState(
    arrayOfIndexes.sort(() => Math.random() - 0.5),
  );
  /*   const shuffle = () => {
    setShuffledIndexes(arrayOfIndexes.sort(() => Math.random() - 0.5));
  }; */

  console.log(shuffledIndexes);

  const shuffle = () => {
    setArrayOfIndexes(randomIndexesGenerator(3));
    setIndexValid(arrayOfIndexes[0]);
    setShuffledIndexes(arrayOfIndexes.sort(() => Math.random() - 0.5));
  };

  return (
    <div className="content-container">
      <ProgressBar numberOfLevels={10} currentLevel={5} />

      <Target onChange={shuffle} index={indexValid} />

      <div className="options-container">
        <div className="option-container">
          <Option index={shuffledIndexes[0]} />
        </div>

        <div className="option-container">
          <Option index={shuffledIndexes[1]} />
        </div>

        <div className="option-container">
          <Option index={shuffledIndexes[2]} />
        </div>
      </div>
    </div>
  );
});
