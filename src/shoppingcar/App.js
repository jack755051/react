import React, { useState } from 'react';
// import RadioBox from './comp/RadioBox';
import Contents from './shoppingcar/Contents';
import Navbar from './shoppingcar/Navbar';

function App() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <Navbar total={total} />
      <Contents setTotal={setTotal} total={total}/>
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
