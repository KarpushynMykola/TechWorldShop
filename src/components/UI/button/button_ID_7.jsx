import React from "react";
import button_ID_7 from "../../../style/button/button_ID_7.module.css";

const Button_ID_7 = function (props){
    return(
        <button className={button_ID_7.Button} onClick={props.onAddToCart}>
            <img src={props.img} alt="Close" width="20" height="20" />
        </button>
    );
}

export default Button_ID_7;