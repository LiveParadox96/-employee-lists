import React from 'react'
import { VscError as Basket } from "react-icons/vsc";

function Button(props){

    function handleClick(event){
        onChange(event)
    }
    const {onChange} = props
    return(
            <button className="icons_basket" onClick={handleClick}>
            <Basket className="icons_basket" size={10} />
            </button>
    )
}

export default Button;
