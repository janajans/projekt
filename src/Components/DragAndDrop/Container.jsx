import React, { useState, useEffect } from 'react';
import { Target } from './Target/Target';
import { Option } from './Option/Option';
import { randomIndexesGenerator } from '../../Util/randomIndexGenerator';
import { ProgressBar } from '../ProgressBar';
const options = {
  default: 'default',
  success: 'success',
  unsuccess: 'unsuccess',
};
const initRandomInd = randomIndexesGenerator(3);
/* const initShuffled =  [...initRandomInd].sort(() => Math.random() - 0.5)
 */

export const Container = /* memo(function Container() */ () => {
  const [arrayOfIndexes, setArrayOfIndexes] = useState(initRandomInd);
  const [isSuccess, setIsSuccess] = useState(options.default);
  const [indexValid, setIndexValid] = useState(initRandomInd[0]);
  const [shuffledIndexes, setShuffledIndexes] = useState(
    [...initRandomInd].sort(() => Math.floor(Math.random() * 3)),
  );
  /*   const shuffle = () => {
    setShuffledIndexes(arrayOfIndexes.sort(() => Math.random() - 0.5));
  }; */

  // console.log('shuffledIndexes', shuffledIndexes);
  // console.log('initRandomInd', initRandomInd);
  /* 
  useEffect(() => {
    setShuffledIndexes([...arrayOfIndexes].sort(() => Math.random() - 0.5));
  }, [indexValid]);*/

  useEffect(() => {
    if (indexValid !== arrayOfIndexes[0]) {
      setIndexValid(arrayOfIndexes[0]);
      setShuffledIndexes([...arrayOfIndexes].sort(() => Math.random() - 0.5));
    }
  }, [arrayOfIndexes]);

  useEffect(() => {
    if (isSuccess === options.success) {
      setTimeout(() => {
        const randomInd = randomIndexesGenerator(3);
        setArrayOfIndexes(randomInd);
        // console.log('randomInd: ', randomInd);
      }, 1000);
    }
  }, [isSuccess]);

  const dropHandler = (itemIndex) => {
    if (indexValid !== itemIndex) {
      setIsSuccess(options.unsuccess);
    } else {
      setIsSuccess(options.success);
    }
    setTimeout(() => setIsSuccess(options.default), 500);
  };
  return (
    <div className="container-content--dnd">
      <ProgressBar numberOfLevels={10} currentLevel={5} />

      <Target
        key={indexValid}
        onDrop={/* () =>  */ dropHandler}
        index={indexValid}
        success={isSuccess}
      />

      <div className="options-container">
        {shuffledIndexes.map((index) => (
          <div key={index} className="option-container">
            <Option index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
