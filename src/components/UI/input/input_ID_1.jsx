import React from 'react';
import input_ID_1 from '../../../style/input/input_ID_1.module.css';

const Input_ID_1 = function (props) {
  return (
    <input className={input_ID_1.input} type={props.type} placeholder={props.placeholder}/>
  );
};

export default Input_ID_1;
