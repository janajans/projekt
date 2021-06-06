import React, { useState } from 'react';
import { memo } from 'react';
import { Target } from './Target';
import { Option } from './Option';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';
import { ProgressBar } from '../ProgressBar';

export const Container = memo(function Container() {
  const arrayOfIndexes = randomIndexesGenerator(3);
  const [indexValid] = useState(arrayOfIndexes[0]);
  const shuffledIndexes = arrayOfIndexes.sort(() => Math.random() - 0.5);

  return (
    <div>
      <ProgressBar numberOfLevels={107.55} currentLevel={44.5654649} />
      <div>
        <Target index={indexValid} />
      </div>
      <div>
        <div className="options-container">
          <Option index={shuffledIndexes[0]} />
          <Option index={shuffledIndexes[1]} />
          <Option index={shuffledIndexes[2]} />
        </div>
      </div>
    </div>
  );
});
