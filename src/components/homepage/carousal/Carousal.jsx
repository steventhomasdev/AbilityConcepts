import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";
import { useNavigate } from "react-router-dom";

export default function Carousal({ products }) {
  const navigate = useNavigate();

  const onProductClick = (event) => {
    let userData = {};
    for (let i in products) {
      if (products[i]._id === event.currentTarget.id) {
        userData = {
          product: products[i],
        };
        break;
      }
    }

    navigate("/productdetail", {
      state: {
        products: { userData },
      },
    });
  };

  return (
    <OwlCarousel
      items={1}
      autoplay={true}
      loop={true}
      dots={false}
      mouseDrag={true}
      nav={false}
      smartSpeed={1000}
      transitionstyle="fade"
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
                <div
                  className="single-welcome-hero"
                  style={{ marginTop: "0px" }}
                >
                  <div className="welcome-hero-txt">
                    <h4>Popular Products</h4>
                    <h2>{products[0].productName}</h2>
                    <div className="tab-pane fade" id="reviews"></div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: products[0].productdescription,
                      }}
                    ></div>
                    <div className="packages-price">
                      <p>${products[0].productprice}</p>
                    </div>
                    <button
                      className="btn-cart welcome-add-cart welcome-more-info"
                      id={products[0]._id}
                      onClick={onProductClick}
                    >
                      more info
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="single-welcome-hero">
                  <div className="welcome-hero-img">
                    <img src={products[0].productimage} alt="slider image" />
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: products[1].productdescription,
                      }}
                    ></div>
                    <div className="packages-price">
                      <p>${products[1].productprice}</p>
                    </div>
                    <button
                      id={products[1]._id}
                      className="btn-cart welcome-add-cart welcome-more-info"
                      onClick={onProductClick}
                    >
                      more info
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="single-welcome-hero">
                  <div className="welcome-hero-img">
                    <img src={products[1].productimage} alt="slider image" />
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: products[2].productdescription,
                      }}
                    ></div>
                    <div className="packages-price">
                      <p>${products[2].productprice}</p>
                    </div>
                    <button
                      className="btn-cart welcome-add-cart welcome-more-info"
                      id={products[2]._id}
                      onClick={onProductClick}
                    >
                      more info
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="single-welcome-hero">
                  <div className="welcome-hero-img">
                    <img src={products[2].productimage} alt="slider image" />
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
