import React, { useState } from 'react';
import CheckBox from './comp/CheckBox';
import RadioBox from './comp/RadioBox';

function AppCopy() {
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');
  const [selectedOption, setSelectOption] = useState('');
  // radio
  const [gender, setGender] = useState('');
  const genderOption = ['男', '女', '不提供', '不確定'];

  //checkBox
  //single
  const [agree, setAgree] = useState(false);
  //multi
  const [likeList, setLikeList] = useState(['西瓜']);
  const friutOption = ['西瓜', '鳳梨', '芒果'];

  const [date, setDate] = useState('');

  return (
    <>
      <h1>可控表單元素</h1>
      <section id="input-text">
        <h3>文字輸入框</h3>
        <input
          type="text"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
      </section>
      <section id="textarea">
        <h3>文字區域</h3>
        <textarea
          value={textArea}
          onChange={(event) => {
            setTextArea(event.target.value);
          }}
        />
      </section>
      <section id="select">
        <h3>下拉選單</h3>
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectOption(e.target.value);
          }}
        >
          <option value="0">請選擇</option>
          <option value="1">雞腿</option>
          <option value="2">魯肉</option>
          <option value="3">排骨</option>
        </select>
      </section>
      <h3>選項按鈕</h3>
      {/* 第一版 */}
      {/* <input
          type="radio"
          value="男"
          checked={gender === '男'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label>男</label>
        <input
          type="radio"
          value="女"
          checked={gender === '女'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label>女</label>
        <input
          type="radio"
          value="未定"
          checked={gender === '未定'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label>未定</label> */}

      {/* 第二版 */}
      {/* <RadioBox value="男" checkedValue={gender} setCheckedValue={setGender} />
      <RadioBox value="女" checkedValue={gender} setCheckedValue={setGender} />
      <RadioBox
        value="未定"
        checkedValue={gender}
        setCheckedValue={setGender}
      />
      <RadioBox
        value="不提供"
        checkedValue={gender}
        setCheckedValue={setGender}
      /> */}

      {genderOption.map((v, i) => {
        return (
          <RadioBox
            key={i}
            value={v}
            checkedValue={gender}
            setCheckedValue={setGender}
          />
        );
      })}
      <hr />
      <h1>核取方塊</h1>
      <h2>單一勾選</h2>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked);
        }}
      />
      <label>我同意網站註冊條例</label>
      <hr />
      <h1>核取方塊</h1>
      <h2>多個勾選</h2>
      {/* <input
        第一版
        type="checkbox"
        value="西瓜"
        checked={likeList.includes('西瓜')}
        onChange={(e) => {
        若有在狀態陣列->移出
          if (likeList.includes(e.target.value)) {
        1. 先從狀態陣列拷貝新陣列
        2. 在拷貝的新陣列中處理
            const newLikeList = likeList.filter((v, i) => {
              return v !== e.target.value;
            });
        3. 設定回狀態陣列
            setLikeList(newLikeList);
          }
        若沒有在狀態陣列中->加入
          if (!likeList.includes(e.target.value)) {
            setLikeList([...likeList, e.target.value]);
          }
        }}
        第二版
        onChange={(e) => {
          if (likeList.includes(e.target.value)) {
            const newLikeList = likeList.filter((v, i) => {
              return v !== e.target.value;
            });
            return setLikeList(newLikeList);
          }
          setLikeList([...likeList, e.target.value]);
        }}
      />
      <label>西瓜</label> */}
      {friutOption.map((v, i) => {
        return (
          <CheckBox
            key={i}
            value={v}
            checkedValueList={likeList}
            setCheckedValueList={setLikeList}
          />
        );
      })}
      <hr />
      <h1>日期時間選擇</h1>
      <h2>單一勾選</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </>
  );
}

export default AppCopy;
