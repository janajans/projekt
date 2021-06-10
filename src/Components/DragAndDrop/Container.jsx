import React, { useState } from 'react';
import { memo } from 'react';
import { Target } from './Target';
import { Option } from './Option';
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
  const shuffle = () => {
    setShuffledIndexes(arrayOfIndexes.sort(() => Math.random() - 0.5));
  };

  console.log(shuffledIndexes);

  const handleNewLevel = () => {
    setArrayOfIndexes(randomIndexesGenerator(3));
  };

  return (
    <>
      <ProgressBar numberOfLevels={15} currentLevel={5} />
      <div>
        <Target
          onNewLevel={handleNewLevel}
          onChange={shuffle}
          index={indexValid}
        />
      </div>

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
    </>
  );
});
