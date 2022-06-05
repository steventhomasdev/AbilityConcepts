import React, { useState } from "react";
import NavBar from "../../common/navbar/NavBar";
import Login from "../../login/Login";
import Carousal from "../carousal/Carousal";

export default function Header() {

  let [login, setLogin] = useState();

  return (
    <div>
      <header id="home" class="welcome-hero">
        <Login login={login} setLogin={setLogin}/>
        <Carousal />
        <NavBar setLogin={setLogin} /> 
      </header>
    </div>
  );
}
