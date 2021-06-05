import React, { useState } from 'react';
import { memo } from 'react';
import { Target } from './Target';
import { Option } from './Option';
import letterObjects from '../../letterObjects';

export const Container = memo(function Container() {
  const [indexValid] = useState(
    Math.floor(Math.random() * letterObjects.length),
  );

  const randomIndexesGenerator = (i) => {
    const index1 = Math.floor(Math.random() * letterObjects.length);

    const arrayOfIndexes = [];

    while (arrayOfIndexes.length < i) {
      const index = Math.floor(Math.random() * letterObjects.length);
      if (!arrayOfIndexes.includes(index)) {
        arrayOfIndexes.push(index);
      }
    }

    return arrayOfIndexes;
  };

  const list = [indexValid, 1, 1];
  const shuffled = list.sort(() => Math.random() - 0.5);

  return (
    <div>
      <div>
        <Target index={indexValid} />
      </div>
      <div>
        <div className="options-container">
          <Option index={shuffled[0]} />
          <Option index={shuffled[1]} />
          <Option index={shuffled[2]} />
        </div>
      </div>
    </div>
  );
});
