import React, { useState } from 'react';
// import RadioBox from './comp/RadioBox';
import OrderList from './store/OrderList';
import Summary from './store/Summary';

function App() {
  const [tshirtOne, setTshirtOne] = useState(1);
  const [tshirtTwo, setTshirtTwo] = useState(1);
  const [tshirtThree, setTshirtThree] = useState(1);

  const ProductCount = () => {
    return tshirtOne + tshirtTwo + tshirtThree;
  };

  const priceList = {
    tshirtOne: 300,
    tshirtTwo: 200,
    tshirtThree: 450,
  };

  const nameList = {
    tshirtOne: '細沙棕',
    tshirtTwo: '湖水綠',
    tshirtThree: '夜空藍',
  };

  const pictureList = {
    tshirtOne: 'https://i.imgur.com/pHQ3xT3.jpg',
    tshirtTwo: 'https://i.imgur.com/pHQ3xT3.jpg',
    tshirtThree: 'https://i.imgur.com/pHQ3xT3.jpg',
  };

  const total = () => {
    Number(
      priceList['tshirtOne'] * tshirtOne +
        priceList['tshirtTwo'] * tshirtTwo +
        priceList['tshirtThree'] * tshirtThree
    ).toLocaleString();
  };

  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList
            tshirtOne={tshirtOne}
            setTshirtOne={setTshirtOne}
            tshirtTwo={tshirtTwo}
            setTshirtTwo={setTshirtTwo}
            tshirtThree={tshirtThree}
            setTshirtThree={setTshirtThree}
            pictureList={pictureList}
            nameList={nameList}
            priceList={priceList}
          />
          <Summary ProductCount={ProductCount()} total={total()} />
        </div>
      </div>
    </>
  );
}

// function App(props) {
//   const [inputText, setInputText] = useState('');
//   const [textArea, setTextArea] = useState('');
//   const [selectOption, setSelectOption] = useState('');
//   const [gender, setGender] = useState('');
//   const genderOptions = ['male', 'female', 'nogender'];

//   return (
//     <>
//       <h1>文字輸入匡</h1>
//       <input
//         type="text"
//         value={inputText}
//         onChange={(e) => {
//           setInputText(e.target.value);
//         }}
//       />
//       <p></p>
//       <hr />
//       <h1>文字區域</h1>
//       <textarea
//         value={textArea}
//         onChange={(e) => {
//           setTextArea(e.target.value);
//         }}
//       />
//       <hr />
//       <h1>下拉選單</h1>
//       <select
//         value={selectOption}
//         onChange={(e) => {
//           setSelectOption(e.target.value);
//         }}
//       >
//         <option value="0">請選擇</option>
//         <option value="1">雞柳</option>
//         <option value="2">雞排</option>
//         <option value="3">雞腿</option>
//       </select>
//       <hr />
//       <h1>選項按鈕</h1>
//       {genderOptions.map((v, i) => {
//         return (
//           <RadioBox
//             key={i}
//             value={v}
//             checkedValue={gender}
//             setCheckedValue={setGender}
//           />
//         );
//       })}

{
  /* <RadioBox
        value="male"
        checkedValue={gender}
        setCheckedValue={setGender}
      />
      <RadioBox
        value="female"
        checkedValue={gender}
        setCheckedValue={setGender}
      />
      <RadioBox
        value="noGender"
        checkedValue={gender}
        setCheckedValue={setGender}
      /> */
}
{
  /* <input
        type="radio"
        value="male"
        checked={gender === 'male'}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <label>male</label>
      <input
        type="radio"
        value="female"
        checked={gender === 'female'}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <label>female</label>
      <input
        type="radio"
        value="nogender"
        checked={gender === 'nogender'}
        onChange={(e) => {
          setGender(e.target.value);
      />
      <label>nogender</label> */
}
//     </>
//   );
// }

export default App;
