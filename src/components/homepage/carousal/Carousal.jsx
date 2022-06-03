import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

export default function Carousal() {
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
                    <h4>great design collection</h4>
                    <h2>cloth covered accent chair</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiuiana smod tempor ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <div className="packages-price">
                      <p>
                        $ 399.00
                        <del>$ 499.00</del>
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
                      src="assets/images/slider/slider1.png"
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
                    <h4>great design collection</h4>
                    <h2>mapple wood accent chair</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiuiana smod tempor ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <div className="packages-price">
                      <p>
                        $ 199.00
                        <del>$ 299.00</del>
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
                      src="assets/images/slider/slider2.png"
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
                    <h4>great design collection</h4>
                    <h2>valvet accent arm chair</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiuiana smod tempor ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <div className="packages-price">
                      <p>
                        $ 299.00
                        <del>$ 399.00</del>
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
                      src="assets/images/slider/slider3.png"
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
