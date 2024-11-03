import React from 'react';
import button_ID_6 from '../../../style/button/button_ID_6.module.css';
import { useNavigate } from 'react-router-dom';

const Button_ID_6 = function (props) {

  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate(props.link);
  };

  const handleButton = () => {
    props.functions();
    goToSignUp();
  }

  return (
    <button onClick={handleButton} className={button_ID_6.button}>{props.text}</button>
  );
};

export default Button_ID_6;