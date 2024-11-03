import React, {useState} from "react";
import Input_ID_1 from './components/UI/input/input_ID_1';
import Button_ID_6 from './components/UI/button/button_ID_6';
import Button_ID_2 from "./components/UI/button/button_ID_2";
import { useNavigate } from 'react-router-dom';
import logIn from './style/LogIn.module.css'
import { loginUser } from './Auth';


const LogIn = function(){

  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    let result = await loginUser(login, password);
    if (result){
      navigate("/")
    }
  };

  return (
    <div className={logIn.Page}>
      <div className={logIn.Form}>
        <div className={logIn.LeftCol}>
          <Button_ID_2 link = "/"/>
        </div>
        <div className={logIn.CentralCol}>
          <div className={logIn.CentralColHeader}>
            <h1 className={logIn.Text}>Log In!</h1>
            <h2 className={logIn.Text2}>Not have an account?</h2>
            <h2 className={logIn.Text3}>Sign Up!</h2>
          </div>
          <div className={logIn.CentralColInputForm}>
            <Input_ID_1 placeholder={"Login"} type={"text"} value={login} setState={setLogin}/>
            <Input_ID_1 placeholder={"Password"} type={"password"} value={password} setState={setPassword}/>
          </div>
          <div className={logIn.CentralColButtonForm}>
            <Button_ID_6 text={"Log in"} functions={handleLogin}/>
          </div>
        </div>
        <div className={logIn.RigthCol}>
        </div>
      </div>
    </div>
  );
}

export default LogIn;