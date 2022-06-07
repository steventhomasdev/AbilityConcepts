import React, { useState } from "react";
import NavBar from "../../common/navbar/NavBar";
import Login from "../../login/Login";
import SignUp from "../../signup/SignUp";
import { getToken } from "../../utls/Session";
import Carousal from "../carousal/Carousal";

export default function Header() {

  let [loginPopUp, SetloginPopUp] = useState(false);  // This is for the login popup
  let [signupPopUp, setSignupPopUp] = useState(false); // this is for the create account popup
  let [isLogin, SetisLogin] = useState(getToken.length <= 5 ? false : true)

  return (
    <div>
      <header id="home" class="welcome-hero">
        <Login loginPopUp={loginPopUp} SetloginPopUp={SetloginPopUp} SetisLogin={SetisLogin} setSignupPopUp={setSignupPopUp}/>
        <SignUp signupPopUp={signupPopUp} setSignupPopUp={setSignupPopUp} SetisLogin={SetisLogin} SetloginPopUp={SetloginPopUp}/>
        <Carousal />
        <NavBar SetloginPopUp={SetloginPopUp} isLogin={isLogin} SetisLogin={SetisLogin}/> 
      </header>
    </div>
  );
}
