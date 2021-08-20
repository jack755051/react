import React, { useState } from 'react';
import './App.css';
import CheckBox from './comp/CheckBox';


function APPrefs(props) {
  const [fields, setFields] = useState({
    username: '',
    password: '',
    email: '',
    agree: false,
    // likeList: [],
  });
  const [likeList, setLikeList] = useState(['西瓜']);
  const friutOption = ['西瓜', '鳳梨', '芒果'];

  //存入錯誤的值
  const [fieldsErrors, setFieldsErrors] = useState({
    username: '',
    password: '',
    email: '',
    agree: '',
  });

  //   const [username, setUsername] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //每個欄位有變動時出現
  const handleFieldChange = (e) => {
    //訂購資料，快遞運送
    //   會員註冊
    //1. 從原本狀態拷貝
    //2. 從拷貝的新物件上處理
    //新輸入的資料與原資料做合併
    const updatedValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const updateFields = {
      //展開運算子
      ...fields,
      [e.target.name]: updatedValue,
    };
    //3. 設定回原狀態物件
    setFields(updateFields);
  };

  //表單送出
  const handleSubmit = (e) => {
    //阻擋預設行為
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData.get('email'));
    console.log(formData.get('username'));
    console.log(formData.get('password'));

    //送到伺服器
  };
  //整個表單有變動時出現，與handleFieldChange不同
  const handleFormChange = (e) => {
    //認定使用者在改變某個有錯誤訊息的欄位
    //清除某個欄位錯誤訊息
    const updatedFieldErrors = {
      //展開運算子
      ...fieldsErrors,
      [e.target.name]: '',
    };
    //3. 設定回原狀態物件
    setFieldsErrors(updatedFieldErrors);
  };

  //當表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    //阻擋錯誤訊息的預設呈現方式（popup）
    e.preventDefault();

    const updatedFieldError =
      e.target.name === 'agree'
        ? '註冊會員需勾選同意'
        : e.target.validationMessage;

    const updatedFieldErrors = {
      //展開運算子
      ...fieldsErrors,
      [e.target.name]: updatedFieldError,
    };
    //3. 設定回原狀態物件
    setFieldsErrors(updatedFieldErrors);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onInvalid={handleFormInvalid}
        onChange={handleFormChange}
      >
        <label>帳號</label>
        <input
          name="username"
          type="text"
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        {fieldsErrors.username !== '' && (
          <small className="error">{fieldsErrors.username}</small>
        )}
        <br />
        <label>密碼</label>
        <input
          name="password"
          type="text"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="5"
        />
        {fieldsErrors.password !== '' && (
          <small className="error">{fieldsErrors.password}</small>
        )}
        <br />
        <label>電子信箱</label>
        <input
          name="email"
          type="email"
          //   value={email}
          value={fields.email}
          //   onChange={(e) => {
          //     setEmail(e.target.value);
          //   }}
          onChange={handleFieldChange}
          required
        />
        {fieldsErrors.email !== '' && (
          <small className="error">{fieldsErrors.email}</small>
        )}
        <br />
        <input
          name="agree"
          type="checkbox"
          value={fields.agree}
          onChange={handleFieldChange}
          required
        />
        我同意會員規定
        {fieldsErrors.agree !== '' && (
          <small className="error">{fieldsErrors.agree}</small>
        )}
        <br />
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
        <br />
        <button type="submit">提交</button>
      </form>
    </>
  );
}

export default APPrefs;
