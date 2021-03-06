import React, { useEffect } from "react";
import Cart from "./cart/Cart";

export default function MycartPage({ isLogin, setCartCount }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Cart isLogin={isLogin} setCartCount={setCartCount} />
    </div>
  );
}
