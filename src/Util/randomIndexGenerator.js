export const randomIndexesGenerator = (i) => {
  const index1 = Math.floor(Math.random() * letterObjects.length);

  const arrayOfIndexes = [];

  while (arrayOfIndexes.length < i) {
    const index = Math.floor(Math.random() * letterObjects.length);
    if (!arrayOfIndexes.includes(index)) {
      arrayOfIndexes.push(index);
    }
  }

  return arrayOfIndexes;
};
