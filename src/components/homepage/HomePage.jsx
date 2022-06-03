import React from "react";
import ScrollToTop from "../common/scroll_top/ScrollTop";
import Footer from "../common/footer/Footer";
import ImageBanner from "./banner/ImageBanner";
import FeaturedProducts from "./featured_products/FeaturedProducts";
import Header from "./header/Header";
import PopularProducts from "./popular-products/PopularProducts";
import ProductCategories from "./product_categories/ProductCategories";
import FooterDetails from "./footer_details/FooterDetails";


export default function HomePage() {
  return (
    <div>
      <Header />
      <PopularProducts />
      <ProductCategories />
      <ImageBanner />
      <FeaturedProducts />
      <FooterDetails />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
