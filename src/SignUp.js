import React, {useState} from "react";
import Input_ID_1 from "./components/UI/input/input_ID_1";
import Button_ID_6 from "./components/UI/button/button_ID_6";
import Button_ID_2 from "./components/UI/button/button_ID_2";
import {registerUser} from "./Regist.js";
import { useNavigate } from 'react-router-dom';
import signUp from "./style/SignUp.module.css";

const SignUp = function(){

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [login, setLogin] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async() => {
      let result = await registerUser(name, surname, login, phone_number, password);
      if (result){
        navigate("/");
      }
    };

    return (
      <div className={signUp.Page}>
        <div className={signUp.Form}>
          <div className={signUp.LeftCol}>
            <Button_ID_2 link = "/"/>
          </div>
          <div className={signUp.CentralCol}>
            <div className={signUp.CentralColHeader}>
              <h1 className={signUp.Text}>Sign Up!</h1>
              <h2 className={signUp.Text2}>have an account?</h2>
              <h2 className={signUp.Text3}>Log In!</h2>
            </div>
            <div className={signUp.CentralColInputForm}>
              <Input_ID_1 placeholder={"Name"} type={"text"} value={name} setState={setName}/>
              <Input_ID_1 placeholder={"Surname"} type={"text"} value={surname} setState={setSurname}/>
              <Input_ID_1 placeholder={"Login"} type={"text"} value={login} setState={setLogin}/>
              <Input_ID_1 placeholder={"Phone number"} type={"text"} value={phone_number} setState={setPhoneNumber}/>
              <Input_ID_1 placeholder={"Password"} type={"password"} value={password} setState={setPassword}/>
            </div>
            <div className={signUp.CentralColButtonForm}>
              <Button_ID_6 text={"Sign Up"} functions={handleRegister}/>
            </div>
          </div>
          <div className={signUp.RigthCol}>
          </div>
        </div>
      </div>
    );
}

export default SignUp;