import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Advertisement from "./components/common/advertisement/Advertisement";
import Footer from "./components/common/footer/Footer";
import FooterDetails from "./components/common/footer_details/FooterDetails";
import Header from "./components/common/header/Header";
import ScrollToTop from "./components/common/scroll_top/ScrollTop";
import HomePage from "./components/homepage/HomePage";
import MycartPage from "./components/mycart/MycartPage";
import PaymentPage from "./components/payment/PaymentPage";
import ProductDetailPage from "./components/productdetailpage/ProductDetailPage";
import ProductListPage from "./components/productlistpage/ProductListPage";
import ShippingPage from "./components/shipping/ShippingPage";
import { getToken } from "./components/utls/Session";

function App() {

  const [cartCount, setCartCount] = useState(0) 
  const [loginPopUp, SetloginPopUp] = useState(false);  // This is for the login popup
  const [isLogin, SetisLogin] = useState(getToken() == undefined ? false : true)

  return (
    <>
      <Header cartCount={cartCount} setCartCount={setCartCount} loginPopUp={loginPopUp} SetloginPopUp={SetloginPopUp} isLogin={isLogin} SetisLogin={SetisLogin}/>
      <Advertisement/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/productlist" element={<ProductListPage />} />
        <Route path="/productdetail" element={<ProductDetailPage setCartCount={setCartCount} SetloginPopUp={SetloginPopUp}/>} />
        <Route path="/cart" element={<MycartPage isLogin={isLogin} setCartCount={setCartCount}/>}/>
        <Route path="/shipping" element={<ShippingPage/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
      </Routes>
      <FooterDetails/>
      <ScrollToTop/>
      <Footer/>
    </>
  );
}

export default App;
