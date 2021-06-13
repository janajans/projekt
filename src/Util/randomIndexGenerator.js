import letterObjects from '../letterObjects.js';

const randomNumber = () => {
  return Math.floor(Math.random() * letterObjects.length);
};

export const randomIndexesGenerator = (i) => {
  let arrayOfIndexes = [];

  while (arrayOfIndexes.length < i) {
    const index = randomNumber();
    if (!arrayOfIndexes.includes(index)) {
      arrayOfIndexes.push(index);
    }
  }
  return arrayOfIndexes;
};
