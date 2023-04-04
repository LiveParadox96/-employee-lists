import { useState } from "react";
import ApplicationBasis from "../ApplicationBasis/ApplicationBasis";
import Modal from "../Modal/Modal";

function ListOfPoliceOfficers() {
  const [show, setShow] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const handleChange = (event: any) => setValue(event.target.value);
  const [arr, setArr] = useState([""]);
  const click = () => setArr([...arr, value]);
  const [value, setValue] = useState("");

  return (
    <>
      <div onClick={() => setShow(!show)}>
        <p className="classification" onClick={() => setShowWindow(showWindow)}>
          Список офицеров полиции
        </p>
      </div>
      {show && <ApplicationBasis />}
      {showWindow && (
        <Modal onChange={handleChange} onClick={click} value={value} />
      )}
    </>
  );
}

export default ListOfPoliceOfficers;
