import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/common/navigation/NavBar";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </>

    // <>
    // </>
  );
}

export default App;
