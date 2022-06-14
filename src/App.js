import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/footer/Footer";
import FooterDetails from "./components/common/footer_details/FooterDetails";
import Header from "./components/common/header/Header";
import ScrollToTop from "./components/common/scroll_top/ScrollTop";
import HomePage from "./components/homepage/HomePage";
import ProductListPage from "./components/productlistpage/ProductListPage";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/productlist" element={<ProductListPage />} />
      </Routes>
      <FooterDetails/>
      <ScrollToTop/>
      <Footer/>
    </>
  );
}

export default App;
