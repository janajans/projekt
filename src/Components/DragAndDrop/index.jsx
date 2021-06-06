import React from 'react';
import './style.css';
import { Container } from './Container';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { usePreview } from 'react-dnd-preview';
import letterObjects from '../../letterObjects';
import { CustomDragLayer } from './CustomDragLayer';

import { deviceType } from '../../Util/deviceType';

const DragAndDrop = () => {
  return (
    <>
      <DndProvider backend={deviceType() ? TouchBackend : HTML5Backend}>
        <Container />
        <CustomDragLayer />
      </DndProvider>
    </>
  );
};

const MyPreview = () => {
  const { display, itemType, item, style } = usePreview();
  if (!display) {
    return null;
  }
  return (
    <div className="item-list__item" style={style}>
      <img src={letterObjects[0].picture.image} />
    </div>
  );
};

export default DragAndDrop;
