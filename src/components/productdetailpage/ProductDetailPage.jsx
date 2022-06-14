import React from "react";
import Products from "./products/Products";
import { useLocation } from "react-router-dom";

export default function ProductDetailPage() {

  const { state } = useLocation();
  return (
    <div>
      <Products product={state}/>
    </div>
  );
}
