import { useState } from "react";
import ExpandingWindow from "../../ExpandingWindow/ExpandingWindow";
import ApplicationBasis from "../ApplicationBasis/ApplicationBasis";

function ListOfPoliceOfficers(){
  const [show,setShow] = useState(false)
  const [showWindow, setShowWindow] = useState(false);
  const handleChange = (event:any) => setValue(event.target.value);
  const [arr, setArr] = useState([""]);
  const click = () => setArr([...arr, value]);
  const [value, setValue] = useState("");
  
return(
  <>
    <div onClick={() => setShow(!show)}>
      <p className="classification" onClick={()=>setShowWindow(showWindow)}>
        Список офицеров полиции
      </p>
    </div>
    {show&&(<ApplicationBasis/> )}
    {showWindow && (
    <ExpandingWindow
    onChange={handleChange}
    onClick={click}
    value={value}/>
    )}
  </>
  )}

export default ListOfPoliceOfficers;