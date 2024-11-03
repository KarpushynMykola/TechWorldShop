import React, {useEffect, useState} from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const loginUser = async (login, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, login, password);
    console.log("Користувач увійшов:", userCredential.user);

    return true;
  } catch (error) {
    alert("You have entered invalid data")
    return false;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Користувач вийшов з акаунту");
  } catch (error) {
    console.error("Помилка при виході з акаунту:", error.message);
  }
};

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  return { user };
};
