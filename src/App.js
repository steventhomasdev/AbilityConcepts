import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Accountpage from "./components/accountpage/Accountpage";
import TopSpacing from "./components/common/advertisement/TopSpacing";
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
import InvoicePage from "./components/invoice/InvoicePage";
import MyOrders from "./components/myorders/MyOrders";
import OrderDetails from "./components/orderdetails/OrderDetails";

function App() {

  const [cartCount, setCartCount] = useState(0) ;
  const [loginPopUp, SetloginPopUp] = useState(false);  // This is for the login popup
  const [isLogin, SetisLogin] = useState(getToken() == undefined ? false : true);

  return (
    <>
      <Header cartCount={cartCount} setCartCount={setCartCount} loginPopUp={loginPopUp} SetloginPopUp={SetloginPopUp} isLogin={isLogin} SetisLogin={SetisLogin}/>
      <TopSpacing/>
      <Routes>
        <Route exact strict path="/home" element={<HomePage/>} />
        <Route path="/*" element={<HomePage />} />
        <Route exact strict path="/productlist" element={<ProductListPage/>} />
        <Route path="/productdetail" element={<ProductDetailPage setCartCount={setCartCount} SetloginPopUp={SetloginPopUp}/>} />
        <Route path="/cart" element={<MycartPage isLogin={isLogin} setCartCount={setCartCount}/>}/>
        <Route path="/shipping" element={<ShippingPage isLogin={isLogin}/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/account" element={<Accountpage isLogin={isLogin} />}/>
        <Route path="/invoice" element={<InvoicePage setCartCount={setCartCount}/>}/>
        <Route path="/orderdetails" element={<OrderDetails/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
      </Routes>
      <FooterDetails/>
      <ScrollToTop/>
      <Footer/>
    </>
  );
}

export default App;
