import React from 'react';
import button_ID_1 from '../../../style/button/button_ID_1.module.css';
import { useNavigate } from 'react-router-dom';

const Button_ID_1 = function (props) {

  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate(props.link);
  };

  return (
    <button onClick={goToSignUp} className={button_ID_1.button}>{props.text}</button>
  );
};

export default Button_ID_1;
