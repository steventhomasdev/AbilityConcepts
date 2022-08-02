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

  if (products) {
    return (
      <OwlCarousel
        items={1}
        autoplay={true}
        loop={true}
        dots={true}
        mouseDrag={true}
        nav={false}
        smartSpeed={2000}
        transitionstyle="fade"
        animateIn="fadeIn"
        animateOut="fadeOutLeft"
        className="owl-theme"
      >
        {products?.map((product) => (
          <div className="single-slide-item">
            <div className="container">
              <div className="welcome-hero-content">
                <div className="row">
                  <div className="col-sm-7">
                    <div
                      className="single-welcome-hero"
                      style={{ marginTop: "0px" }}
                    >
                      <div className="welcome-hero-txt">
                        <h4>Featured Products</h4>
                        <h2>{product.productName}</h2>
                        <div className="tab-pane fade" id="reviews"></div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: product.productdescription,
                          }}
                        ></div>
                        <div className="packages-price">
                          <p>${product.productprice}</p>
                        </div>
                        <button
                          className="btn-cart welcome-add-cart welcome-more-info"
                          id={product._id}
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
                        <img src={product.productimage} alt={product.productName} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    );
  }
}
