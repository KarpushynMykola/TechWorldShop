import React from "react";
import button_ID_3 from "../../../style/button/button_ID_3.module.css";
import { useNavigate } from 'react-router-dom';

const Button_ID_3 = function (props){
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate(props.link);
    };

    return (
        <button className={props.isActive ? button_ID_3.buttonActive : button_ID_3.bottonInactive} onClick={props.onClick || goToSignUp}>
            <img src={props.img} alt="Close" width="30" height="30" />
        </button>
    );
}

export default Button_ID_3;