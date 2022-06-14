import React, {useEffect} from "react";
import Products from "./products/Products";
import { useLocation } from "react-router-dom";

export default function ProductDetailPage({setCartCount}) {

  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <Products product={state} setCartCount={setCartCount}/>
    </div>
  );
}
