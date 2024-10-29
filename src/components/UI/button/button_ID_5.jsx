import React from "react";
import button_ID_5 from "../../../style/button/button_ID_5.module.css"

const Button_ID_5 = function (props){
    return (
        <button className={button_ID_5.button} onClick={props.onClick}>
            <div className={button_ID_5.LeftCol}>
                <img src={props.img} alt="Close" width="20" height="20" />
            </div>
            <div className={button_ID_5.RightCol}>
                {props.text}
            </div>
        </button>
    );
}

export default Button_ID_5;