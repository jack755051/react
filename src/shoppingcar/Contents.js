import React from 'react';

function Contents(props) {
  const { setTotal, total } = props;

  return (
    <>
      <div className="container">
        <h3>Right Aligned Navbar</h3>
        <p>
          <button
            onClick={() => {
              setTotal(total + 1);
            }}
          >
            加入購物車
          </button>
        </p>
      </div>
    </>
  );
}

export default Contents;
