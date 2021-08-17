import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parents() {
  const [pData, setPData] = useState('父母元件資料');

  // const [pData2, setPData2] = useState('');

  return (
    <>
      <h1>父母</h1>
      <hr />
      <ChildA pData={pData} />
      <hr />
      <ChildB setPData={setPData} />
    </>
  );
}

export default Parents;
