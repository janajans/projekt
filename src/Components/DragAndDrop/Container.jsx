import { usePreview } from 'react-dnd-preview';
import React, { useState } from 'react';
import { memo } from 'react';
import { Target } from './Target';
import { Option } from './Option';
import letterObjects from '../../letterObjects';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';

export const Container = memo(function Container() {
  const arrayOfIndexes = randomIndexesGenerator(3);
  const [indexValid] = useState(arrayOfIndexes[0]);
  const shuffledIndexes = arrayOfIndexes.sort(() => Math.random() - 0.5);

  return (
    <div>
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
