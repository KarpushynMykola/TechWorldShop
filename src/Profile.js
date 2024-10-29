import React, {useState} from "react";
import profile from "./style/Profile.module.css"
import Menu from "./components/UI/select/menu";
import user_icon from "./assets/profile_page/user.svg";
import calendar from "./assets/icons/calendar.svg";
import phone from "./assets/icons/phone.svg";
import Button_ID_1 from "./components/UI/button/button_ID_1";
import Input_ID_1 from "./components/UI/input/input_ID_1";


const Profile = function () {

    const [isCatalogueActive, setIsCatalogueActive] = useState(true);

    const toggleCatalogueActive = function() {
        setIsCatalogueActive(!isCatalogueActive);
    };

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
                                <h1 className={profile.Text}>Name and Surname</h1>
                                <h2 className={profile.Text2}>Email</h2>
                            </div>
                        </div>
                        <hr></hr>
                        <div className={profile.CenterCont}>
                            <div className={profile.CenterContRow}>
                                <img src={phone} alt="Close" width="30px" height="30px" />
                                <div className={profile.CenterContText}>
                                    <h1 className={profile.Text2}>0000000000000</h1>
                                </div>
                            </div>
                            <div className={profile.CenterContRow}> 
                                <img src={calendar} alt="Close" width="30px" height="30px" />
                                <div className={profile.CenterContText}>
                                    <h1 className={profile.Text2}>DD-MM-YYYY</h1>
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
                                            <Input_ID_1 placeholder={"Current password"} type={"password"}/>
                                        </div>
                                        <div className={profile.Input}>
                                            <Input_ID_1 placeholder={"New password"} type={"password"}/>
                                        </div>
                                        <div className={profile.Input}>
                                            <Input_ID_1 placeholder={"confirm new password"} type={"password"}/>
                                        </div>
                                    </div>
                                    <div className={profile.FormBotton}>
                                        <Button_ID_1 text={"Confirm"}/>
                                    </div>
                                </div>
                            </div>
                            <div className={profile.BottonContRigth}>
                                <div className={profile.Form}>
                                    <div className={profile.FormTop}>
                                        <h1 className={profile.Text}>Password change</h1>
                                    </div>
                                    <div className={profile.FormCenter}>
                                        <div className={profile.Input}>
                                            <Input_ID_1 placeholder={"Current password"} type={"password"}/>
                                        </div>
                                        <div className={profile.Input}>
                                            <Input_ID_1 placeholder={"New phone number"} type={"text"}/>
                                        </div>
                                    </div>
                                    <div className={profile.FormBotton}>
                                        <Button_ID_1 text={"Confirm"}/>
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