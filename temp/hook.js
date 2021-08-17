import React, { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(0);
  const [total2, total3] = [3, 4];

  return (
    <>
      <h1 className="totalColor" onClick={() => {}}>
        {total}
      </h1>
      <h2 className="totalColor">{total2}</h2>
      <p className="speech">
        React（有時叫React.js或ReactJS），是一個為資料提供彩現為HTML視圖的開源JavaScript
        庫。React視圖通常採用包含以自訂HTML標記規定的其他組件的組件彩現。React為程式設計師提供了一種子組件不能直接影響外層組件（"data
        flows
        down"）的模型，資料改變時對HTML文件的有效更新，和現代單頁應用中組件之間乾淨的分離。
        它由Facebook、Instagram和一個由個人開發者和企業組成的社群維護。[2][3][4]根據JavaScript分析服務Libscore，React目前正在被Netflix、Imgur、Bleacher
        Report、Feedly、Airbnb、SeatGeek、HelloSign等很多網站的首頁使用。[5]
      </p>
    </>
  );
}

export default App;
