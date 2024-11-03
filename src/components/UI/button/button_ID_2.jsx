import React from "react";
import { useNavigate } from 'react-router-dom';
import button_ID_2 from "../../../style/button/button_ID_2.module.css";
import cross from "../../../assets/icons/cross.svg"

const Button_ID_2 = function (props){
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate(props.link);
    };

    return (
        <button onClick={goToSignUp} className={button_ID_2.button}>
            <img src={cross} alt="Close" width="18" height="18" />
        </button>
    );    
}

export default Button_ID_2;