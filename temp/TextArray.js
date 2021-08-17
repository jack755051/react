import React from 'react';
import './App.css';

function App() {
  const textArray = ['aaa', 'kkk', 'yy', 123];

  return (
    <>
      <ul>
        {textArray.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
