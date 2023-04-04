import React, { useState } from "react";
import "./Modal";
import ModalWindow from "./ModalWindow/ModalWindow";

const Modal = (props: any) => {
  const [isModal, setModal] = useState(false);
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
    <>
      <button onClick={() => setModal(true)} className="head_pers">
        Создать персонажа
      </button>
      <ModalWindow
        isVisible={isModal}
        title="Введите имя персонажа"
        content={
          <div className="add_head_person">
            <input
              className="input_name"
              value={inputValue}
              onChange={handleChange}
              maxLength={14}
              size={14}
            />
            <button onClick={handleOnClick}>Добавить</button>
          </div>
        }
        footer={<button>Cancel</button>}
        onClose={() => setModal(false)}
      />
    </>
  );
};

export default Modal;
