import React from "react";
import button_ID_4 from "../../../style/button/button_ID_4.module.css";
import { useNavigate } from 'react-router-dom';

const Button_ID_4 = function (props){

    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate(props.link);
    };

    return (
        <button onClick = {goToSignUp} className={props.isUserActive ? button_ID_4.buttonActive : button_ID_4.button}>
            <img src={props.img} alt="Close" width="30" height="30" />
        </button>
    );
}

export default Button_ID_4;