import React from "react";
import NavBar from "../../common/navbar/NavBar";
import Carousal from "../carousal/Carousal";

export default function Header() {
  return (
    <div>
      <header id="home" class="welcome-hero">
        <Carousal />
        <NavBar />
      </header>
    </div>
  );
}
