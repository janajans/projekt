import React from 'react';

const Pexeso = () => {
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * letterObjects.length),
  );

  return (
    <>
      <div className="container-pexeso">
        <img
          className="pexeso-image"
          src={letterObjects[randomIndex].picture.image}
          alt=""
        />
      </div>
    </>
  );
};

export default Pexeso;
