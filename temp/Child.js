import React from 'react';

function Child(props) {
  console.log(props);

  return (
    <>
      <h1>{props.text}</h1>
    </>
  );
}

Child.defaultProps = {
  text: 'ya motherfucker',
};

export default Child;
