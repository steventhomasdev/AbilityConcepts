import React, { useState } from "react";
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
import { checkAdmin, getToken } from "./components/utls/Session";
import InvoicePage from "./components/invoice/InvoicePage";
import MyOrders from "./components/myorders/MyOrders";
import OrderDetails from "./components/orderdetails/OrderDetails";
import AboutUs from "./components/aboutus/AboutUs";
import FundingPage from "./components/funding/FundingPage";
import EditProducts from "./components/admin/editproducts/EditProducts";
import AdminNavBar from "./components/admin/adminnavbar/AdminNavBar";
import AddProducts from "./components/admin/addproducts/AddProducts";
import AdminProductListPage from "./components/admin/adminproductlistpage/AdminProductListPage";
import ServiceEducation from "./components/service_education/ServiceEducation";
import ShippingProcedure from "./components/shippingprocedure/ShippingProcedure";

function App() {

  const [cartCount, setCartCount] = useState(0) ;
  const [loginPopUp, SetloginPopUp] = useState(false);  // This is for the login popup
  const [isLogin, SetisLogin] = useState(getToken() == undefined ? false : true);
  const [isAdmin, SetIsAdmin] = useState(checkAdmin()); // This is for the admin portal

  if(isAdmin){
    return(
      <>
        <AdminNavBar/>
        <TopSpacing/>
        <Routes>
          <Route path="/*" element={<MyOrders/>}/>
          <Route path="/vieworders" elemet={<MyOrders/>}/>
          <Route path="/productlist" element={<AdminProductListPage/>}/>
          <Route path="/editproducts/*" element={<EditProducts/>}/>
          <Route path="/addproducts" element={<AddProducts/>}/>
          <Route path="/orderdetails" element={<OrderDetails/>}/>
        </Routes>
        <FooterDetails/>
        <ScrollToTop/>
        <Footer/>
      </>

    )
  }else{
  return (
    <>
      <Header cartCount={cartCount} setCartCount={setCartCount} loginPopUp={loginPopUp} SetloginPopUp={SetloginPopUp} isLogin={isLogin} SetisLogin={SetisLogin} SetIsAdmin={SetIsAdmin}/>
      <TopSpacing/>
      <Routes>
        <Route exact strict path="/home" element={<HomePage/>} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/productlist" element={<ProductListPage/>} />
        <Route path="/productdetail" element={<ProductDetailPage setCartCount={setCartCount} SetloginPopUp={SetloginPopUp}/>} />
        <Route path="/cart" element={<MycartPage isLogin={isLogin} setCartCount={setCartCount}/>}/>
        <Route path="/shipping" element={<ShippingPage isLogin={isLogin}/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/account" element={<Accountpage isLogin={isLogin} />}/>
        <Route path="/invoice" element={<InvoicePage setCartCount={setCartCount}/>}/>
        <Route path="/orderdetails" element={<OrderDetails/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/funding" element={<FundingPage/>}/>
        <Route path="/serviceeducation" element={<ServiceEducation/>}/>
        <Route path="/shippingprocedure" element={<ShippingProcedure/>}/>
      </Routes>
      <FooterDetails/>
      <ScrollToTop/>
      <Footer/>
    </>
  );
  }
}

export default App;
