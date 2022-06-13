import React from 'react'
import Footer from '../common/footer/Footer'
import FooterDetails from '../common/footer_details/FooterDetails'
import Advertisement from './advertisement/Advertisement'
import Header from './header/Header'
import Products from './products/Products'
import { useLocation } from "react-router-dom";

export default function ProductListPage() {

  const { state } = useLocation();

  return (
    <div>
        <Header />
        <Advertisement/>
        <Products productsList={state}/>
        <FooterDetails />
        <Footer />
    </div>
  )
}
