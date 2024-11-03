import React from "react";
import button_ID_2 from "../../../style/button/button_ID_2.module.css";
import cross from "../../../assets/icons/cross.svg"

const Button_ID_9 = function (props){
    return (
        <button onClick={props.removeFromCart} className={button_ID_2.button}>
            <img src={cross} alt="Close" width="18" height="18" />
        </button>
    );    
}

export default Button_ID_9;