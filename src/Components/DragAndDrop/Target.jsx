import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import letterObjects from '../../letterObjects';

export const Target = ({ index }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.OPTION,
    drop: (item) => {
      console.log(item);
    },
    /*  collect: (monitor) => ({ 
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }), */
  }));

  /*   const isActive = canDrop && isOver;
   */
  return (
    <div ref={drop} role={'Dustbin'} className="target">
      {/*       {isActive ? 'Release to drop' : 'Drag a picture here'}
       */}
      <img src={letterObjects[index].picture.image} alt="" />
    </div>
  );
};
