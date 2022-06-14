import React from 'react'
import Products from './products/Products'
import { useLocation } from "react-router-dom";

export default function ProductListPage() {

  const { state } = useLocation();

  return (
    <div>
        <Products productsList={state}/>
    </div>
  )
}
