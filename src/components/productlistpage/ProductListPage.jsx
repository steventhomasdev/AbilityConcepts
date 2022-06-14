import React from 'react'
import Advertisement from './advertisement/Advertisement'
import Products from './products/Products'
import { useLocation } from "react-router-dom";

export default function ProductListPage() {

  const { state } = useLocation();

  return (
    <div>
        <Advertisement/>
        <Products productsList={state}/>
    </div>
  )
}
