import React, {useState} from "react";
import Menu from "./components/UI/select/menu";
import shopping from "./style/ShoppingCart.module.css";

const ShoppingCart = function (){

    const [isCatalogueActive, setIsCatalogueActive] = useState(true);

    const toggleCatalogueActive = function() {
        setIsCatalogueActive(!isCatalogueActive);
    };

    return (
        <div className={shopping.ShoppingCart}>
            <Menu toggleCatalogueActive={toggleCatalogueActive} isActive = {isCatalogueActive} active={false} isUserActive={false} isShoppingCart={true}/>
            <div className={shopping.Body}>
                <main className={shopping.ShoppingCartList}>
                    <div className={shopping.ShoppingCartListCont}>
                        <div className={shopping.ShoppingCartListHeader}>
                            <h1 className={shopping.Text}>ShoppingCart</h1>
                        </div>
                        <div className={shopping.ShoppingCartListBody}>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ShoppingCart;