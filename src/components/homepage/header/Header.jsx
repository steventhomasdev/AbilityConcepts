import React, { useState } from "react";
import NavBar from "../../common/navbar/NavBar";
import Login from "../../login/Login";
import { getToken } from "../../utls/Session";
import Carousal from "../carousal/Carousal";

export default function Header() {

  let [loginPopUp, SetloginPopUp] = useState(false);  // This is for the login popup
  let [isLogin, SetisLogin] = useState(getToken.length <= 5 ? false : true)

  return (
    <div>
      <header id="home" class="welcome-hero">
        <Login loginPopUp={loginPopUp} SetloginPopUp={SetloginPopUp} SetisLogin={SetisLogin}/>
        <Carousal />
        <NavBar SetloginPopUp={SetloginPopUp} isLogin={isLogin} SetisLogin={SetisLogin}/> 
      </header>
    </div>
  );
}
