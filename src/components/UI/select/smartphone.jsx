import React, { useEffect, useState } from "react";
import smartphone from "../../../style/select/smartphone.module.css";
import ShoppingForm from "./form";
import Loading from "./loading";
import { db } from "../../../firebase";
import { collection, getDocs, getDoc, setDoc, doc } from "firebase/firestore";
import {useAuth} from "../../../Auth";

const Smartphone = function (){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "smartphone"));
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
        <div className={smartphone.Smartphone}>
            {products.map(product => (
                <ShoppingForm img={product.imageUrl} name={product.name} price={product.price} onAddToCart={() => addToCart(product)}/>
            ))}
        </div>
    );
}

export default Smartphone;