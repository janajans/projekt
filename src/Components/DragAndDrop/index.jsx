import React from 'react';
import './style.css';
import { Container } from './Container';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import { deviceType } from '../../Util/deviceType';

const DragAndDrop = () => {
  return (
    <>
      <DndProvider backend={deviceType() ? TouchBackend : HTML5Backend}>
        <Container />
      </DndProvider>
    </>
  );
};

export default DragAndDrop;
