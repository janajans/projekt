import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import letterObjects from '../../letterObjects';

const options = {
  default: 'default',
  success: 'success',
  unsuccess: 'unsuccess',
};

export const Target = ({ index }) => {
  const [successful, setSuccess] = useState(options.default);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.OPTION,
    drop: (item) => {
      console.log(item);

      if (index !== item.index) {
        setSuccess(options.unsuccess);
      } else if (index === item.index) {
        setSuccess(options.success);
      }
      setTimeout(() => setSuccess(options.default), 1000);
    },
  }));
  let classname = '';

  if (successful === options.success) {
    classname = 'target--successful';
  } else if (successful === options.unsuccess) {
    classname = 'target--unsuccessful';
  }

  console.log(classname);

  return (
    <div ref={drop} className="target">
      <img
        src={letterObjects[index].picture.image}
        className={classname}
        alt=""
      />
    </div>
  );
};
