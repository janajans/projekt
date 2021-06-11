import React, { useState, useContext } from 'react';
import { SoundContext } from '../../../Providers/SoundContext';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
import letterObjects from '../../../letterObjects';
import './style.css';

const options = {
  default: 'default',
  success: 'success',
  unsuccess: 'unsuccess',
};
export const Target = ({ index, onDrop, success }) => {
  const { soundOn } = useContext(SoundContext);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.OPTION,
    drop: (item) => onDrop(item.index),
    /*   drop: (item) => {
      console.log('item: ', index, item.index);

      if (index !== item.index) {
        setSuccess(options.unsuccess);
        setTimeout(() => setSuccess(options.default), 500);
      } else if (index === item.index) {
        setSuccess(options.success);
        console.log('onGame ', onNewGame);
        onNewGame();
      }
    }, */
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
      {index}
    </div>
  );
};
