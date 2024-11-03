import React from "react";
import Button_ID_4 from "../button/button_ID_4";
import Button_ID_3 from "../button/button_ID_3";
import menu from "../../../style/select/menu.module.css";
import menu_img from "../../../assets/icons/menu.svg";
import user from "../../../assets/icons/user.svg";
import shopping_cart from "../../../assets/icons/shopping_cart.svg";
import home from "../../../assets/icons/home.svg";
import useAuthStatus from "../../../AuthStatus";

const Menu = function(props){

    const isLoggedIn = useAuthStatus();

    return (
        <header className={menu.Menu}>
            <div className={menu.MenuNav}>
                {props.active ? <Button_ID_3 isActive={props.isActive} img={menu_img} onClick={props.toggleCatalogueActive }/> : <Button_ID_3 isActive={props.isActive} img={home} link = "/"/>}
                <div className={menu.MenuNavUsers}>
                    <Button_ID_4 link = {isLoggedIn ? "/profile" : "/login"} img = {user} isUserActive={props.isUserActive}/>
                    <Button_ID_4 link = {isLoggedIn ? "/shoppingcart" : "/login"} img = {shopping_cart} isUserActive={props.isShoppingCart}/>
                </div>
            </div>
        </header>
    );
}

export default Menu;