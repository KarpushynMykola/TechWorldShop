import React from "react";
import Button_ID_1 from "../button/button_ID_1";
import Button_ID_5 from "../button/button_ID_5";
import catalogue from "../../../style/select/catalogue.module.css";
import laptop from "../../../assets/icons/laptop.svg";
import tablet from "../../../assets/icons/tablet.svg";
import smartphone from "../../../assets/icons/smartphone.svg";
import keyboard from "../../../assets/icons/keyboard.svg";
import sign_question from "../../../assets/icons/sign_question.svg"

const Catalogue = function ({ setSelectedType }){
    return (
        <aside className={catalogue.Catalogue}>
            <section className={catalogue.Nav_1}>
                <div className={catalogue.NavCont}>
                    <Button_ID_5 img = {laptop} text="Computers and Laptops " onClick={() => setSelectedType('computers_and_laptops')}/>
                    <Button_ID_5 img = {tablet} text="Tablet" onClick={() => setSelectedType('tablet')}/>
                    <Button_ID_5 img = {smartphone} text="Smartphone" onClick={() => setSelectedType('smartphone')}/>
                    <Button_ID_5 img = {keyboard} text="Accessories"  onClick={() => setSelectedType('accessories')}/>
                </div>
            </section>
            <section className={catalogue.Nav_2}>
                <div className={catalogue.NavCont}>
                    <Button_ID_5 img = {sign_question} text="About Us"/>
                </div>
            </section>
            <section className={catalogue.Nav_3}>
                <Button_ID_1 text = "Log in" link = "/login"/>
                <Button_ID_1 text = "Sign Up" link = "/signup"/>
            </section>
        </aside>
    );
}

export default Catalogue;
