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

export const Target = ({ index, onNewLevel, onChange }) => {
  const { soundOn } = useContext(SoundContext);
  const [successful, setSuccess] = useState(options.default);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.OPTION,
    drop: (item) => {
      console.log(item);

      if (index !== item.index) {
        setSuccess(options.unsuccess);
        setTimeout(() => setSuccess(options.default), 500);
      } else if (index === item.index) {
        setSuccess(options.success);
        onNewLevel();
        onChange();
      }
    },
  }));
  let classname = '';

  let audioFailure = new Audio('../../assets/sounds/failure.wav');
  let audioSuccess = new Audio('../../assets/sounds/success.wav');
  let audioPictures = new Audio(letterObjects[index].picture.sound);

  if (successful === options.success) {
    classname = 'target--successful';
    if (soundOn) {
      audioSuccess.play();
      window.location.reload();
    }
  } else if (successful === options.unsuccess) {
    classname = 'target--unsuccessful';
    if (soundOn) {
      audioFailure.play();
    }
  }

  console.log(classname);

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
