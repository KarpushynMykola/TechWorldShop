import React, {useState, useEffect} from "react";
import Menu from "./components/UI/select/menu";
import shopping from "./style/ShoppingCart.module.css";
import { db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "./Auth";
import CartForm from "./components/UI/select/cartform";
import Loading from "./components/UI/select/loading";

const ShoppingCart = function (){

    const [cartItems, setCartItems] = useState([]);
    const [isCatalogueActive, setIsCatalogueActive] = useState(true);
    const [loading, setLoading] = useState(true);

    const { user } = useAuth();

    useEffect(() => {
        const fetchCartItems = async () => {
          if (!user) return;
    
          try {
            const cartRef = doc(db, "carts", user.uid);
            const cartSnapshot = await getDoc(cartRef);
    
            if (cartSnapshot.exists()) {
              setCartItems(cartSnapshot.data().items);
            } else {
              console.log("Корзина пуста");
              setCartItems([]);
            }
          } catch (error) {
            console.error("Помилка при завантаженні корзини:", error);
          }
          setLoading(false);
        };
    
        fetchCartItems();
    }, [user]);

    const removeFromCart = async (idToRemove) => {
        if (!user) return;
    
        try {
          const updatedCartItems = cartItems.filter((item) => item.id !== idToRemove);
          setCartItems(updatedCartItems);
    
          const cartRef = doc(db, "carts", user.uid);
          await updateDoc(cartRef, { items: updatedCartItems });
          
        } catch (error) {
          console.error("Помилка при видаленні товару з корзини:", error);
        }
    };

    const BuyCart = async (idToRemove) => {
      if (!user) return;
  
      try {
        const updatedCartItems = cartItems.filter((item) => item.id !== idToRemove);
        setCartItems(updatedCartItems);
  
        const cartRef = doc(db, "carts", user.uid);
        await updateDoc(cartRef, { items: updatedCartItems });

        alert("Thank you for your purchase")
        
      } catch (error) {
        console.error("Помилка при видаленні товару з корзини:", error);
      }
  };

    const toggleCatalogueActive = function() {
        setIsCatalogueActive(!isCatalogueActive);
    };

    if (loading){
        return <Loading/>
    }

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
                            {cartItems.map((item) => (
                                <CartForm name={item.name} img={item.imageUrl} price={item.price} removeFromCart={() => removeFromCart(item.id)} buyCart={() => BuyCart(item.id)}/>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ShoppingCart;