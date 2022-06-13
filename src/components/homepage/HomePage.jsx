import React, { useState, useCallback, useEffect } from "react";
import ScrollToTop from "../common/scroll_top/ScrollTop";
import Footer from "../common/footer/Footer";
import ImageBanner from "./banner/ImageBanner";
import FeaturedProducts from "./featured_products/FeaturedProducts";
import Header from "./header/Header";
import PopularProducts from "./popular-products/PopularProducts";
import ProductCategories from "./product_categories/ProductCategories";
import FooterDetails from "../common/footer_details/FooterDetails";
import { GetProductsForHomePage } from "../../api/api";



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
      <Header products={products}/>
      <PopularProducts/>
      <ProductCategories/>
      <ImageBanner />
      <FeaturedProducts products={products} />
      <FooterDetails />
      <ScrollToTop />
      <Footer />
    </div>
  );
  }
}
