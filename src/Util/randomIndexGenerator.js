import letterObjects from '../letterObjects.js';

export const randomIndexesGenerator = (i) => {
  const arrayOfIndexes = [];

  while (arrayOfIndexes.length < i) {
    const index = Math.floor(Math.random() * letterObjects.length);
    if (!arrayOfIndexes.includes(index)) {
      arrayOfIndexes.push(index);
    }
  }

  return arrayOfIndexes;
};
