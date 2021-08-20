import React, { useState } from 'react';
import CC from './0817/CC';

function AppCC() {
  const [isAlive, setIsAlice] = useState(true);
  return (
    <>
      {isAlive && <CC />}
      <button
        onClick={() => {
          setIsAlice(!isAlive);
        }}
      >
        {isAlive ? '再見' : '出現'}
      </button>
    </>
  );
}

export default AppCC;
