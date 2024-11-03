import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addUserToDatabase } from './UserBD';

export const registerUser = async (name, surname, login, phone_number, password) => {

    if (name === "" || surname === "" || phone_number === "") return false;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, login, password);
      const user = userCredential.user;
  
      await addUserToDatabase(user.uid, name, surname, phone_number, user.email);
      
      return true;

    } catch (error) {
      alert("You have entered invalid data")
      return false;
    }
};
