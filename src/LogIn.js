import React from "react";
import Input_ID_1 from './components/UI/input/input_ID_1';
import Button_ID_1 from './components/UI/button/button_ID_1';
import Button_ID_2 from "./components/UI/button/button_ID_2";

import logIn from './style/LogIn.module.css'

const LogIn = function(){
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
              <Input_ID_1 placeholder={"Login"} type={"text"}/>
              <Input_ID_1 placeholder={"Password"} type={"password"}/>
            </div>
            <div className={logIn.CentralColButtonForm}>
              <Button_ID_1 text={"Log in"}/>
            </div>
          </div>
          <div className={logIn.RigthCol}>
          </div>
        </div>
      </div>
    );
}

export default LogIn;