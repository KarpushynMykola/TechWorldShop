import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwTpyKgKSehW8TmZ4A6Hn2f9RW8tHN7a4",
  authDomain: "techworld-283d4.firebaseapp.com",
  projectId: "techworld-283d4",
  storageBucket: "techworld-283d4.firebasestorage.app",
  messagingSenderId: "38331567087",
  appId: "1:38331567087:web:4d3103fd6a4d183487441a"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;