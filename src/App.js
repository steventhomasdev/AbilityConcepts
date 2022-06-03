import React from "react";
import Footer from "./components/common/footer/Footer";
import ScrollToTop from "./components/common/scroll_top/ScrollTop";
import ImageBanner from "./components/homepage/banner/ImageBanner";
import FeaturedProducts from "./components/homepage/featured_products/FeaturedProducts";
import Header from "./components/homepage/header/Header";
import PopularProducts from "./components/homepage/popular-products/PopularProducts";
import ProductCategories from "./components/homepage/product_categories/ProductCategories";

function App() {
  return (
    <>
      <Header />
      <PopularProducts/>
      <ProductCategories/>
      <ImageBanner/>
      <FeaturedProducts/>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
