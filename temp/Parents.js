import React from 'react';
import Child from './Chil';

function Parents() {
  return (
    <>
      <Child text="Hello My Load!" abc={123} kkk={567} />
      <Child />
    </>
  );
}

export default Parents;
