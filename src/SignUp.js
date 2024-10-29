import React from "react";
import Input_ID_1 from "./components/UI/input/input_ID_1";
import Button_ID_1 from "./components/UI/button/button_ID_1";
import Button_ID_2 from "./components/UI/button/button_ID_2";

import signUp from "./style/SignUp.module.css";

const SignUp = function(){
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
              <Input_ID_1 placeholder={"Name"} type={"text"}/>
              <Input_ID_1 placeholder={"Surname"} type={"text"}/>
              <Input_ID_1 placeholder={"Login"} type={"text"}/>
              <Input_ID_1 placeholder={"Phone number"} type={"text"}/>
              <Input_ID_1 placeholder={"Password"} type={"password"}/>
            </div>
            <div className={signUp.CentralColButtonForm}>
              <Button_ID_1 text={"Sign Up"}/>
            </div>
          </div>
          <div className={signUp.RigthCol}>
          </div>
        </div>
      </div>
    );
}

export default SignUp;