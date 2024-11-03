import React from 'react';
import button_ID_1 from '../../../style/button/button_ID_1.module.css';

const Button_ID_8 = function (props) {

  return (
    <button onClick={props.buyCarts} className={button_ID_1.button}>{props.text}</button>
  );
};

export default Button_ID_8;
