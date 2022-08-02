import React, { useState, useCallback, useEffect } from "react";
import ImageBanner from "./banner/ImageBanner";
import FeaturedProducts from "./featured_products/FeaturedProducts";
import ProductCategories from "./product_categories/ProductCategories";
import Carousal from "./carousal/Carousal";
import Spinner from "../common/spinner/Spinner";
import { GetFeturedProducts } from "../../api/api";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState({});

  const fetchData = useCallback(() => {
    GetFeturedProducts().then((data) => setProducts(data.body));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (Object.keys(products).length !== 0) {
    return (
      <div>
        <div style={{ marginTop: "25px"}}></div>
        <Carousal products={products} />
        <div style={{ marginTop: "35px"}}></div>
        <ProductCategories />
        <ImageBanner />
        {/* <FeaturedProducts products={products} /> */}
      </div>
    );
  } else {
    return(
    <div className="login-pop" style={{ display: "flex" }}>
      <Spinner />
    </div>
    )
  }
}
