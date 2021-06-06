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

      /*   if (item && dropResult) {
        alert(`You dropped ${index} into ${dropResult.index}!`);
      } */
    },
    /*  collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }), */
  }));
  /* 
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * letterObjects.length),
  );

  const effectiveIndex = index ? index : randomIndex;
 */
  return (
    <div ref={drag} role="Option" className="option">
      <img src={letterObjects[index].letter.uppercase} alt="" />
    </div>
  );
};

/* export const Box = function Box({ name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.BOX,
      item: { name },
      end: (item, monitor) => {
          const dropResult = monitor.getDropResult();
          if (item && dropResult) {
              alert(`You dropped ${item.name} into ${dropResult.name}!`);
          }
      },
      collect: (monitor) => ({
          isDragging: monitor.isDragging(),
          handlerId: monitor.getHandlerId(),
      }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (<div ref={drag} role="Box" style={{ ...style, opacity }} data-testid={`box-${name}`}>
    {name}
  </div>); */
