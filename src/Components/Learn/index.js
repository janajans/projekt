import React, { useState, Fragment } from 'react';
import LearnItem from '../LearnItem/index';
import arrowRight from './img/arrowRight.png';
import arrowLeft from './img/arrowLeft.png';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';
import './style.css';

const Learn = () => {
  const [randomIndexes, setrandomIndexes] = useState(randomIndexesGenerator(3));

  return (
    <Fragment>
      <div className="learn-items">
        {randomIndexes.map((index) => {
          return (
            <Fragment key={index}>
              <LearnItem randomIndex={index} />
            </Fragment>
          );
        })}
      </div>
      <img
        id="arrow-left"
        src={arrowLeft}
        alt="arrow to the left"
        // onClick={go back to previous set of images}
      />
      <img
        id="arrow-right"
        src={arrowRight}
        alt="arrow to the right"
        onClick={() => {
          setrandomIndexes(randomIndexesGenerator(3));
        }}
      />
    </Fragment>
  );
};

export default Learn;
