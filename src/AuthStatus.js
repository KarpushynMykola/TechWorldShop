import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, [auth]);

    return isLoggedIn;
};

export default useAuthStatus;
