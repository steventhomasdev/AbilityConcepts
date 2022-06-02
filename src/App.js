import React from "react";
import Footer from "./components/common/footer/Footer";
import NavBar from "./components/common/navbar/NavBar";

function App() {
  return (
    <>
      <div className="top-area">
        <div className="header-area"></div>
          <NavBar />
        </div>
      <div className="clearfix"></div>
      <Footer />
    </>
  );
}

export default App;
