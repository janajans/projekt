import React, { useContext } from 'react';
import { SoundContext } from '../../Providers/SoundContext';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import letterObjects from '../../letterObjects';
import { CustomDragLayer } from '../DragAndDrop/CustomDragLayer';

export const Option = function Option({ index }) {
  const { soundOn } = useContext(SoundContext);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.OPTION,
    item: { index },

    end: (item, monitor) => {
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
            <div className="option">
              <img
                src={letterObjects[index].letter.uppercase}
                alt="letter in drag and drop game"
              />
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
