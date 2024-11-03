import React from "react";
import cartform from "../../../style/select/cartform.module.css";
import Button_ID_8 from "../button/button_ID_8";
import Button_ID_9 from "../button/button_ID_9";

const CartForm = function (props){
    return(
        <div className={cartform.CartForm}>
            <div className={cartform.CartFormInside}>
                <div className={cartform.FormCol_1}>
                    <Button_ID_9 removeFromCart={props.removeFromCart}/>
                </div>
                <div className={cartform.FormCol_2}>
                    <img src={props.img} className={cartform.img} height="100%" width="100%"/>
                </div>
                <div className={cartform.FormCol_3}>
                    <h1 className={cartform.text}>{props.name}</h1>
                </div>
                <div className={cartform.FormCol_4}>
                    <Button_ID_8 text="Buy" buyCarts={props.buyCart}/>
                    <h3 className={cartform.text_2}>{props.price} $</h3>
                </div>
            </div>
        </div>
    );
}

export default CartForm;