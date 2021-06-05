import React from 'react';
import letterA from './img/A-letters.png';
import letterB from './img/B-letters.png';
import letterC from './img/C-letters.png';
import bus from './img/autobus.png';
import Header_long from '../Header_long';

const Play = () => {
  return (
    <>
      <Header_long />
      <div className="container">
        <main>
          <img id="autobus" src={bus} alt="obrázek autobus" />
        </main>
        <div className="row">
          <img src={letterA} alt="písmeno A" />
          <img src={letterB} alt="písmeno B" />
          <img src={letterC} alt="písmeno C" />
        </div>
      </div>
    </>
  );
};

export default Play;
