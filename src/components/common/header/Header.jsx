import React, { useState, useEffect } from "react";
import { GetAccountDetails } from "../../../api/api";
import NavBar from "../navbar/NavBar";
import SignUp from "../signup/SignUp";
import Login from "../login/Login";
import { getToken } from "../../utls/Session";

export default function Header({cartCount, setCartCount, loginPopUp, SetloginPopUp, SetisLogin, isLogin}) {

  const [signupPopUp, setSignupPopUp] = useState(false); // this is for the create account popup
  const [accountDetails, setAccountDetails] = useState({})

  const userData = {
  authorizationToken: getToken(),
  };

  const fetchAccountDetails = () => {
    if(isLogin)  
    GetAccountDetails(userData).then((data) =>
      setAccountDetails(data.body.name.split(" "))
    );
  };
  
  useEffect(() => {
    fetchAccountDetails();
  }, [isLogin])

  return (
    <div>
      <header id="home" className="welcome-hero">
        <Login loginPopUp={loginPopUp} SetloginPopUp={SetloginPopUp} SetisLogin={SetisLogin} setSignupPopUp={setSignupPopUp}/>
        <SignUp signupPopUp={signupPopUp} setSignupPopUp={setSignupPopUp} SetisLogin={SetisLogin} SetloginPopUp={SetloginPopUp}/>
        <NavBar SetloginPopUp={SetloginPopUp} isLogin={isLogin} SetisLogin={SetisLogin} accountDetails={accountDetails} cartCount={cartCount} setCartCount={setCartCount}/> 
      </header>
    </div>
  );
}
