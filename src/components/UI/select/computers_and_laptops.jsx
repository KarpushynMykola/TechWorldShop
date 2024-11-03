import React, { useEffect, useState } from "react";
import computers_and_laptops from "../../../style/select/computers_and_laptops.module.css";
import ShoppingForm from "./form";
import { db } from "../../../firebase";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import Loading from "./loading";
import {useAuth} from "../../../Auth";

const Computers_and_laptops = function(){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "computers_and_laptops"));
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);


  const addToCart = async (product) => {
    if (!user) {
      alert("Yoy are not log in");
      return;
    }

    try {
      const cartRef = doc(db, "carts", user.uid);
      const cartSnapshot = await getDoc(cartRef);

      let cartData = cartSnapshot.exists() ? cartSnapshot.data().items : [];

      const existingProductIndex = cartData.findIndex(item => item.id === product.id);

      if (existingProductIndex >= 0) {
        alert("This product is already in the cart");
      } else {
        const productWithQuantity = { ...product, id: product.id};
        cartData.push(productWithQuantity);
      }
      await setDoc(cartRef, { items: cartData });

    } catch (error) {
      console.error("Помилка: ", error);
    }
  };


  if (loading){
    return <Loading/>
  }

    return (
        <div className={computers_and_laptops.Computers_and_laptops}>
            {products.map(product => (
                <ShoppingForm img={product.imageUrl} name={product.name} price={product.price} onAddToCart={() => addToCart(product)}/>
            ))}
        </div>
    );
}

export default Computers_and_laptops;