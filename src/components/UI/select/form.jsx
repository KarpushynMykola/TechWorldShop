import React from "react";
import shoppingcard from "../../../style/select/shoppingcard.module.css";
import shopping_cart from "../../../assets/icons/shopping_cart_2.svg";
import Button_ID_7 from "../button/button_ID_7";

const ShoppingForm = function (props){
    return (
        <div className={shoppingcard.form}>
            <div className={shoppingcard.forminside}>
                <div className={shoppingcard.formTop}>
                    <img className={shoppingcard.img} src={props.img} height="100%" width="100%"/>
                </div>
                <div className={shoppingcard.formCentral}>  
                    <h3 className={shoppingcard.text1}>{props.name}</h3>
                </div>
                <div className={shoppingcard.formBotton}>
                    <h3 className={shoppingcard.text2}>{props.price} $</h3>
                    <Button_ID_7 img={shopping_cart} onAddToCart={props.onAddToCart}/>
                </div>
            </div>
        </div>
    );
}

export default ShoppingForm;