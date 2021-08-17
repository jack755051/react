import React from 'react';

function ChildA(props) {
  console.log(props);
  return (
    <>
      <h1 style={{ color: 'red' }}>子女Ａ</h1>
      <h2 style={{ color: 'skyblue' }}>{props.pData}</h2>
    </>
  );
}

export default ChildA;
