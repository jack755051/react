import React from 'react';
import ProductItem from './ProductItem';

function OrderList(props) {
  const {
    // tshirtOne,
    // tshirtTwo,
    // tshirtThree,
    // setTshirtOne,
    // setTshirtTwo,
    // setTshirtThree,
    // priceList,
    // pictureList,
    // nameList,
    products,
    counts,
    setCounts,
  } = props;

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {products.map((product, index) => {
          return (
            <ProductItem
              count={counts[index]}
              setCount={(newCount) => {
                // 先從目前狀態中拷貝一個新陣列, [1,1,1,1]
                const newCounts = [...counts];
                // 更新數量陣列自己的索引值，如果小於1則用1來更新
                newCounts[index] = newCount;
                // 更新到狀態中
                setCounts(newCount);
              }}
              price={product.price}
              image={product.image}
              name={product.name}
              category={product.category}
            />
          );
        })}
        {/* <ProductItem
          tshirt={tshirtOne}
          setTshirt={setTshirtOne}
          price={priceList.tshirtOne}
          picture={pictureList.tshirtOne}
          name={nameList.tshirtOne}
        />
        <ProductItem
          tshirt={tshirtTwo}
          setTshirt={setTshirtTwo}
          price={priceList.tshirtTwo}
          picture={pictureList.tshirtTwo}
          name={nameList.tshirtTwo}
        />
        <ProductItem
          tshirt={tshirtThree}
          setTshirt={setTshirtThree}
          price={priceList.tshirtThree}
          picture={pictureList.tshirtThree}
          name={nameList.tshirtThree}
        /> */}
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;
