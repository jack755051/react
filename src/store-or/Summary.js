import React from 'react';

function Summary(props) {
  const { ProductCount, total } = props;
  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>Summary</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col" style={{ paddingLeft: 0 }}>
            商品總數
          </div>
          <div className="col text-right">{ProductCount}</div>
        </div>
        <div
          className="row"
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '2vh 0',
          }}
        >
          <div className="col">總價</div>
          <div className="col text-right">{total}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  );
}

export default Summary;
