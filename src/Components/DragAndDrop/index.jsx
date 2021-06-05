import React from 'react';
import './style.css';
import { Container } from './Container';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DragAndDrop = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </>
  );
};

export default DragAndDrop;

/* return (
    <>
      <div className="target">
        <img src={letterObjects[31].picture.image} alt="" />
      </div>

      <div className="options-container">
        <div className="option">
          <img src={letterObjects[22].letter.uppercase} alt="" />
        </div>

        <div className="option">
          <img src={letterObjects[2].letter.uppercase} alt="" />
        </div>

        <div className="option">
          <img src={letterObjects[31].letter.uppercase} alt="" />
        </div>
      </div>
    </>
  ); */
