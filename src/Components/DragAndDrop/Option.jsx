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
    },
  }));

  return (
    <div ref={drag} role="Option" className="option">
      <img src={letterObjects[index].letter.uppercase} alt="" />
    </div>
  );
};
