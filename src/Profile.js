import React, {useEffect, useState} from "react";
import profile from "./style/Profile.module.css"
import Menu from "./components/UI/select/menu";
import user_icon from "./assets/profile_page/user.svg";
import calendar from "./assets/icons/calendar.svg";
import phone from "./assets/icons/phone.svg";
import Button_ID_6 from "./components/UI/button/button_ID_6";
import Input_ID_1 from "./components/UI/input/input_ID_1";
import Loading from "./components/UI/select/loading";
import { auth } from "./firebase";
import { onAuthStateChanged,  updatePassword, reauthenticateWithCredential, EmailAuthProvider  } from "firebase/auth";
import { getUserFromDatabase } from "./UserBD";
import { useAuth } from "./Auth"; 
import { db } from "./firebase"; // ваш файл налаштувань firebase
import { doc, updateDoc } from "firebase/firestore";


const Profile = function () {

    const [isCatalogueActive, setIsCatalogueActive] = useState(true);

    const toggleCatalogueActive = function() {
        setIsCatalogueActive(!isCatalogueActive);
    };

    const { user } = useAuth();
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            const data = await getUserFromDatabase(user.uid);
            setUserData(data);
          } else {
            setUserData(null);
          }
          setLoading(false);
        });
    
        return () => unsubscribe();
    }, []);

    const handlePasswordChange = async () => {
        if (newPassword !== confirmPassword) {
          alert("The new password and the confirmation password do not match.");
          return;
        }
    
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
    
        try {
            await reauthenticateWithCredential(user, credential);
        
            await updatePassword(user, newPassword);
            alert("Password changed successfully");
        } catch (error) {
            alert("An error occurred when changing the password.")
        }
    };

    const updateUserInDatabase = async (uid, userData) => {
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, userData);
    };

    const handlePhoneNumberChange = async () => {
        const credential = EmailAuthProvider.credential(user.email, currentPassword);

        try{
            await reauthenticateWithCredential(user, credential);
            await updateUserInDatabase(user.uid, { phone_number: newPhoneNumber});
            alert("Phone number changed successfully");
        } catch {
            alert("An error occurred when changing the phone number.")
        }
    };

    if (loading) {
        return <Loading/>
    }
    
    return (
        <div className={profile.Profile}>
            <Menu toggleCatalogueActive={toggleCatalogueActive} isActive = {isCatalogueActive} active={false} isUserActive={true}/>
            <div className={profile.Body}>
                <main className={profile.ProfileInfo}>
                    <div className={profile.ProfileInfoCont}>
                        <div className={profile.InfoCont}>
                            <div className={profile.Avatar}>
                                <img src={user_icon} alt="Close" width="70px" height="70px" />
                            </div>
                            <div className={profile.NameAndEmail}>
                                <h1 className={profile.Text}>{userData.name} {userData.surname}</h1>
                                <h2 className={profile.Text2}>{userData.email}</h2>
                            </div>
                        </div>
                        <hr></hr>
                        <div className={profile.CenterCont}>
                            <div className={profile.CenterContRow}>
                                <img src={phone} alt="Close" width="30px" height="30px" />
                                <div className={profile.CenterContText}>
                                    <h1 className={profile.Text2}>{userData.phone_number}</h1>
                                </div>
                            </div>
                            <div className={profile.CenterContRow}> 
                                <img src={calendar} alt="Close" width="30px" height="30px" />
                                <div className={profile.CenterContText}>
                                    <h1 className={profile.Text2}>{new Date(userData.createdAt).toLocaleDateString()}</h1>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className={profile.BottonCont}>
                            <div className={profile.BottonContLeft}>
                                <div className={profile.Form}>
                                    <div className={profile.FormTop}>
                                        <h1 className={profile.Text}>Password change</h1>
                                    </div>
                                    <div className={profile.FormCenter}>
                                    <div className={profile.Input}>
                                            <Input_ID_1 placeholder={"Current password"} type={"password"} value={currentPassword} setState={setCurrentPassword}/>
                                        </div>
                                        <div className={profile.Input}>
                                            <Input_ID_1 placeholder={"New password"} type={"password"} value={newPassword} setState={setNewPassword}/>
                                        </div>
                                        <div className={profile.Input}>
                                            <Input_ID_1 placeholder={"confirm new password"} type={"password"} value={confirmPassword} setState={setConfirmPassword}/>
                                        </div>
                                    </div>
                                    <div className={profile.FormBotton}>
                                        <Button_ID_6 text={"Confirm"} functions={handlePasswordChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className={profile.BottonContRigth}>
                                <div className={profile.Form}>
                                    <div className={profile.FormTop}>
                                        <h1 className={profile.Text}>Phone Number change</h1>
                                    </div>
                                    <div className={profile.FormCenter}>
                                        <div className={profile.Input}>
                                            <Input_ID_1 placeholder={"Current password"} type={"password"} value={currentPassword} setState={setCurrentPassword}/>
                                        </div>
                                        <div className={profile.Input}>
                                            <Input_ID_1 placeholder={"New phone number"} type={"text"} value={newPhoneNumber} setState={setNewPhoneNumber}/>
                                        </div>
                                    </div>
                                    <div className={profile.FormBotton}>
                                        <Button_ID_6 text={"Confirm"} functions={handlePhoneNumberChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Profile;