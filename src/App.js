import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Advertisement from "./components/common/advertisement/Advertisement";
import Footer from "./components/common/footer/Footer";
import FooterDetails from "./components/common/footer_details/FooterDetails";
import Header from "./components/common/header/Header";
import ScrollToTop from "./components/common/scroll_top/ScrollTop";
import HomePage from "./components/homepage/HomePage";
import ProductDetailPage from "./components/productdetailpage/ProductDetailPage";
import ProductListPage from "./components/productlistpage/ProductListPage";

function App() {

  const [cartCount, setCartCount] = useState() 

  return (
    <>
      <Header cartCount={cartCount}/>
      <Advertisement/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/productlist" element={<ProductListPage />} />
        <Route path="/productdetail" element={<ProductDetailPage setCartCount={setCartCount}/>} />
      </Routes>
      <FooterDetails/>
      <ScrollToTop/>
      <Footer/>
    </>
  );
}

export default App;
