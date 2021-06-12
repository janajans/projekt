import React, { useState, useContext } from 'react';
import { SoundContext } from '../../../Providers/SoundContext';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
import letterObjects from '../../../letterObjects';
import './style.css';

export const options = {
  default: 'default',
  success: 'success',
  unsuccess: 'unsuccess',
};

export const Target = ({ index, onDrop, success }) => {
  const { soundOn } = useContext(SoundContext);

  const [successful, setSuccess] = useState(options.default);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.OPTION,
    drop: (item) => onDrop(item.index),
  }));
  let classname = '';

  let audioFailure = new Audio('../../assets/sounds/failure.wav');
  let audioSuccess = new Audio('../../assets/sounds/success.wav');
  let audioPictures = new Audio(letterObjects[index].picture.sound);

  if (success === options.success) {
    classname = 'target--successful';
    if (soundOn) {
      audioSuccess.play();
    }
  } else if (success === options.unsuccess) {
    classname = 'target--unsuccessful';
    if (soundOn) {
      audioFailure.play();
    }
  }

  return (
    <div ref={drop} className="target">
      <img
        src={letterObjects[index].picture.image}
        className={classname}
        alt=""
        onClick={() => {
          if (soundOn) {
            audioPictures.play();
          }
        }}
      />
    </div>
  );
};
