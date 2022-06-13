import React, { useState, useEffect } from "react";
import { GetAccountDetails } from "../../../api/api";
import NavBar from "../../common/navbar/NavBar";
import Login from "../../login/Login";
import SignUp from "../../signup/SignUp";
import { getToken } from "../../utls/Session";

export default function Header() {
  let [loginPopUp, SetloginPopUp] = useState(false); // This is for the login popup
  let [signupPopUp, setSignupPopUp] = useState(false); // this is for the create account popup
  let [isLogin, SetisLogin] = useState(getToken() == undefined ? false : true);
  const [accountDetails, setAccountDetails] = useState({});

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
  }, [isLogin]);

  return (
    <div>
      <header id="home" className="welcome-hero">
        <Login
          loginPopUp={loginPopUp}
          SetloginPopUp={SetloginPopUp}
          SetisLogin={SetisLogin}
          setSignupPopUp={setSignupPopUp}
        />
        <SignUp
          signupPopUp={signupPopUp}
          setSignupPopUp={setSignupPopUp}
          SetisLogin={SetisLogin}
          SetloginPopUp={SetloginPopUp}
        />
        <NavBar
          SetloginPopUp={SetloginPopUp}
          isLogin={isLogin}
          SetisLogin={SetisLogin}
          accountDetails={accountDetails}
        />
      </header>
    </div>
  );
}
