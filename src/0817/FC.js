import React, { useEffect, useState } from 'react';

function FC(props) {
  const [total, setTotal] = useState(
    (function () {
      console.log('init(like constructor)');
      return 0;
    })()
  );
  //模擬didMount
  useEffect(() => {
    console.log('componentDidMount');
    const newTotal = +localStorage.getItem('total');
    setTotal(newTotal);
  }, []);

  //模擬didUpdate
  useEffect(() => {
    console.log('componentDidUpdate', total);
  }, [total]);

  //模擬didUnmount
  useEffect(() => {
    return () => {
      console.log('componentDidUnmount');
    };
  }, []);

  return (
    <>
      {(function () {
        console.log('render');
      })()}
      <h1>{total}</h1>
    </>
  );
}

export default FC;
