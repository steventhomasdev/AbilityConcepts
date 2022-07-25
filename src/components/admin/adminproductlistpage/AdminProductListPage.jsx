import React, { useEffect, useState } from "react";
import Products from "./products/Products";
import { useLocation } from "react-router-dom";

export default function AdminProductListPage() {
  const { state } = useLocation();
  const [products, setProducts] = useState(state);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (state === null) {
      setProducts({
        products: {
          data: {
            body: "No Products",
          },
        },
      });
    }
  }, []);

  if (state !== null) {
    return (
      <div>
        <Products productsList={state} />
      </div>
    );
  }
  if (products !== null) {
    return (
      <div>
        <Products productsList={products} />
      </div>
    );
  }
}
