import React from 'react';

function CheckBox(props) {
  const { value, checkedValueList, setCheckedValueList } = props;

  const handleChange = (e) => {
    const eValue = e.target.value;
    //若有在狀態陣列->移出
    if (checkedValueList.includes(eValue)) {
      //1. 先從狀態陣列拷貝新陣列
      //2. 在拷貝的新陣列中處理
      const newLikeList = checkedValueList.filter((v, i) => {
        return v !== eValue;
      });
      //3. 設定回狀態陣列
      setCheckedValueList(newLikeList);
    }
    //若沒有在狀態陣列中->加入
    if (!checkedValueList.includes(eValue)) {
      setCheckedValueList([...checkedValueList, eValue]);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        value={value}
        checked={checkedValueList.includes(value)}
        onChange={handleChange}
      />
      <label>{value}</label>
    </>
  );
}

export default CheckBox;
