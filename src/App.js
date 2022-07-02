import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Accountpage from "./components/accountpage/Accountpage";
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

  const [cartCount, setCartCount] = useState(0) ;
  const [loginPopUp, SetloginPopUp] = useState(false);  // This is for the login popup
  const [isLogin, SetisLogin] = useState(getToken() == undefined ? false : true);
  const [isProductListPage, setIsProductListPage] = useState(false);

  return (
    <>
      <Header cartCount={cartCount} setCartCount={setCartCount} loginPopUp={loginPopUp} SetloginPopUp={SetloginPopUp} isLogin={isLogin} SetisLogin={SetisLogin}/>
      {
        isProductListPage ? null : <Advertisement/>
      }
      <Routes>
        <Route path="/home" element={<HomePage setIsProductListPage={setIsProductListPage}/>} />
        <Route path="/*" element={<HomePage setIsProductListPage={setIsProductListPage}/>} />
        <Route path="/productlist" element={<ProductListPage setIsProductListPage={setIsProductListPage}/>} />
        <Route path="/productdetail" element={<ProductDetailPage setCartCount={setCartCount} SetloginPopUp={SetloginPopUp}/>} />
        <Route path="/cart" element={<MycartPage isLogin={isLogin} setCartCount={setCartCount} setIsProductListPage={setIsProductListPage}/>}/>
        <Route path="/shipping" element={<ShippingPage isLogin={isLogin}/>}/>
        <Route path="/payment" element={<PaymentPage setCartCount={setCartCount}/>}/>
        <Route path="/account" element={<Accountpage isLogin={isLogin} setIsProductListPage={setIsProductListPage}/>}/>
      </Routes>
      <FooterDetails/>
      <ScrollToTop/>
      <Footer/>
    </>
  );
}

export default App;
