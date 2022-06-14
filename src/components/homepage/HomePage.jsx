import React, { useState, useCallback, useEffect } from "react";
import ImageBanner from "./banner/ImageBanner";
import FeaturedProducts from "./featured_products/FeaturedProducts";
import PopularProducts from "./popular-products/PopularProducts";
import ProductCategories from "./product_categories/ProductCategories";
import { GetProductsForHomePage } from "../../api/api";
import Carousal from "./carousal/Carousal";



export default function HomePage() {

  const [products, setProducts] = useState({});

  const fetchData = useCallback( () => {
    GetProductsForHomePage()
    .then((data) => setProducts(data.body));
  },[])
  
  useEffect(() => {
    fetchData();
  }, [fetchData])

  if (Object.keys(products).length != 0) {
  return (
    <div>
      <Carousal products={products}/>
      <PopularProducts/>
      <ProductCategories/>
      <ImageBanner />
      <FeaturedProducts products={products} />
    </div>
  );
  }
}
