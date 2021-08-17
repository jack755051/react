import React from 'react';

function MyButton(props) {
  //由父母給你的，透過props
  const { handleClick, value } = props;
  //解構復職：
  return (
    <>
      <button
        onClick={() => {
          handleClick(value);
          //props.handleClick(props.value)
        }}
      >
        {value > 0 ? '+' + value : value}
      </button>

    </>
  );
}

export default MyButton;
