import React, { useState } from 'react';
import OrderList from './store/OrderList';
import Summary from './store/Summary';

const products = [
  {
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    name: '金色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 600,
  },
];

function App() {
  const [counts, setCounts] = useState(Array(products.length).fill(1));
  // 計算總共買了多少產品
  const ProductCount = () => {
    let totalCount = 0;
    for (let i = 0; i < counts.length; i++) {
      totalCount += counts[i];
    }
    return totalCount;
  };
  // 計算總價用
  const total = () => {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      sum += products[i].price * counts[i];
    }

    return sum.toLocaleString();
  };

  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList
            products={products}
            counts={counts}
            setCounts={setCounts}
          />
          <Summary ProductCount={ProductCount()} total={total()} />
        </div>
      </div>
    </>
  );
}

export default App;
