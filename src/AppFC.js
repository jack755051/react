import React, { useState } from 'react';
import FC from './0817/FC';

function AppFC() {
  const [isAlive, setIsAlice] = useState(true);
  return (
    <>
      {isAlive && <FC />}
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

export default AppFC;
