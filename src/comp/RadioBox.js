import React from 'react';

function RadioBox(prop) {
  const { value, checkedValue, setCheckedValue } = prop;

  return (
    <>
      <input
        type="radio"
        value={value}
        checked={checkedValue === value}
        onChange={(e) => {
          setCheckedValue(e.target.value);
        }}
      />
      <label>{value}</label>
    </>
  );
}

export default RadioBox;
