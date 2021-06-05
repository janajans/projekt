import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import letterObjects from '../../letterObjects';

export const Option = function Option({ index }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.OPTION,
    item: { index },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${index} into ${dropResult.index}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * letterObjects.length),
  );

  const effectiveIndex = index ? index : randomIndex;

  return (
    <div ref={drag} role="Option" className="option">
      <img src={letterObjects[effectiveIndex].letter.uppercase} alt="" />
    </div>
  );
};
