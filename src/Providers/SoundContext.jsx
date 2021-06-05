import React, { useState } from 'react';

export const SoundContext = React.createContext({ soundOn: true });

const SoundProvider = ({ children }) => {
  const [soundOn, setSoundOn] = useState(true);
  return (
    <SoundContext.Provider value={{ soundOn, setSoundOn }}>
      {children}
    </SoundContext.Provider>
  );
};

export default SoundProvider;
