import React, { useState } from "react";
import "./ExpandingWindow.css";

function ExpandingWindow(props: any) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event: any) {
    setInputValue(event.target.value);
    onChange(event); 
  }

  function handleOnClick() {
    onClick(inputValue);
  }
  const { onClick, onChange } = props;

  return (
    <div className="basis">
      <p className="text_qvest">Введите имя персонажа</p>
      <div className="fixed">
        <input
          className="inp"
          placeholder="Введите данные"
          type="text"
          onChange={handleChange}
          value={inputValue}
          maxLength={14}
          size={14}
        ></input>
        <button onClick={handleOnClick}>Добавить</button>
      </div>
    </div>
  );
}

export default ExpandingWindow;
