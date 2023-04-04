import React, { useState } from "react";
// import ExpandingWindow from "../../ExpandingWindow/ExpandingWindow";
import { VscError as Basket } from "react-icons/vsc";
import Button from "../UI/Button";
import Modal from "../Modal/Modal";

function ApplicationBasis() {
  const [toggle, setToggle] = useState(false);
  const [arr, setArr] = useState([""]);
  const [value, setValue] = useState("");

  const handleChange = (event: any) => setValue(event.target.value);
  const click = () => setArr([...arr, value]);

  const result = arr.map((element, index) => {
    if (!element) return null;
    return (
      <div className="action_flex" key={index}>
        <span className="list_person">{element}</span>
        <Button onChange={() => remove(index)} />
      </div>
    );
  });

  function remove(index: number) {
    setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
  }

  return (
    <div>
      <div className="add_pers">
        <div>
          {!toggle && 
          <Modal 
          onChange={handleChange} 
          onClick={click} />}
        </div>
        <div className="persons">
          {result}
          {/*amendments are needed*/}
        </div>
      </div>
    </div>
  );
}

export default ApplicationBasis;
