import React, { useContext } from 'react';
import { SoundContext } from '../../../Providers/SoundContext';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
import letterObjects from '../../../letterObjects';
import { CustomDragLayer } from '../CustomDragLayer';
import './style.css';

export const Option = function Option({ index }) {
  const { soundOn } = useContext(SoundContext);
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: ItemTypes.OPTION,
    item: { index },

    end: (item, monitor) => {
      console.log('item index Drop item', item.index);
      const dropResult = monitor.getDropResult();
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  let audioLetters = new Audio(letterObjects[index].letter.sound);

  return (
    <>
      {isDragging ? (
        <CustomDragLayer
          item={
            <div className="option" ref={dragPreview}>
              <img
                src={letterObjects[index].letter.uppercase}
                alt="letter in drag and drop game"
              />
              {index}
            </div>
          }
        />
      ) : (
        <div ref={drag} role="Option" className="option">
          <img
            src={letterObjects[index].letter.uppercase}
            alt="letter in drag and drop game"
            onClick={() => {
              if (soundOn) {
                audioLetters.play();
              }
            }}
          />
        </div>
      )}
    </>
  );
};
