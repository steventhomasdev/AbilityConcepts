import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";
import { GetProductsForHomePage } from "../../../api/api";

export default function Carousal() {
  const [products, setProducts] = useState({});

  if (Object.keys(products).length == 0) {
    GetProductsForHomePage()
      .then((data) => setProducts(data.body))
  }

  //console.log(data.body[0].productName)

  if (Object.keys(products).length != 0) {
    return (
      <OwlCarousel
        items={1}
        autoplay={true}
        loop={true}
        dots={false}
        mouseDrag={true}
        nav={false}
        smartSpeed={1000}
        transitionStyle="fade"
        animateIn="fadeIn"
        animateOut="fadeOutLeft"
        className="owl-theme"
      >
        <div className="single-slide-item slide1">
          <ol className="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to="0"
              className="active"
            >
              <span className="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="1">
              <span className="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="2">
              <span className="small-circle"></span>
            </li>
          </ol>
          <div className="container">
            <div className="welcome-hero-content">
              <div className="row">
                <div className="col-sm-7">
                  <div className="single-welcome-hero">
                    <div className="welcome-hero-txt">
                      <h4>Popular Products</h4>
                      <h2>{products[0].productName}</h2>
                      <p>
                        {products[0].productdescription}
                      </p>
                      <div className="packages-price">
                        <p>
                          ${products[0].productprice}
                        </p>
                      </div>
                      <button
                        className="btn-cart welcome-add-cart"
                        onclick="window.location.href='#'"
                      >
                        <span className="lnr lnr-plus-circle"></span>
                        add <span>to</span> cart
                      </button>
                      <button
                        className="btn-cart welcome-add-cart welcome-more-info"
                        onclick="window.location.href='#'"
                      >
                        more info
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="single-welcome-hero">
                    <div className="welcome-hero-img">
                      <img
                        src={products[0].productimage}
                        alt="slider image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-slide-item slide2">
          <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0">
              <span className="small-circle"></span>
            </li>
            <li
              data-target="#header-carousel"
              data-slide-to="1"
              className="active"
            >
              <span className="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="2">
              <span className="small-circle"></span>
            </li>
          </ol>
          <div className="container">
            <div className="welcome-hero-content">
              <div className="row">
                <div className="col-sm-7">
                  <div className="single-welcome-hero">
                    <div className="welcome-hero-txt">
                      <h4>Popular Products</h4>
                      <h2>{products[1].productName}</h2>
                      <p>
                        {products[1].productdescription}
                      </p>
                      <div className="packages-price">
                        <p>
                          ${products[1].productprice}
                        </p>
                      </div>
                      <button
                        className="btn-cart welcome-add-cart"
                        onclick="window.location.href='#'"
                      >
                        <span className="lnr lnr-plus-circle"></span>
                        add <span>to</span> cart
                      </button>
                      <button
                        className="btn-cart welcome-add-cart welcome-more-info"
                        onclick="window.location.href='#'"
                      >
                        more info
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="single-welcome-hero">
                    <div className="welcome-hero-img">
                      <img
                        src={products[1].productimage}
                        alt="slider image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-slide-item slide3">
          <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0">
              <span className="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="1">
              <span className="small-circle"></span>
            </li>
            <li
              data-target="#header-carousel"
              data-slide-to="2"
              className="active"
            >
              <span className="small-circle"></span>
            </li>
          </ol>
          <div className="container">
            <div className="welcome-hero-content">
              <div className="row">
                <div className="col-sm-7">
                  <div className="single-welcome-hero">
                    <div className="welcome-hero-txt">
                      <h4>Popular Products</h4>
                      <h2>{products[2].productName}</h2>
                      <p>
                        {products[2].productdescription}
                      </p>
                      <div className="packages-price">
                        <p>
                          ${products[2].productprice}
                        </p>
                      </div>
                      <button
                        className="btn-cart welcome-add-cart"
                        onclick="window.location.href='#'"
                      >
                        <span className="lnr lnr-plus-circle"></span>
                        add <span>to</span> cart
                      </button>
                      <button
                        className="btn-cart welcome-add-cart welcome-more-info"
                        onclick="window.location.href='#'"
                      >
                        more info
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="single-welcome-hero">
                    <div className="welcome-hero-img">
                      <img
                        src={products[2].productimage}
                        alt="slider image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}
