import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

export default function ImageBanner() {
  return (
    <div>
      <section id="sofa-collection">
        <div className="container-fluid">
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
            <div className="sofa-collection collectionbg1">
              <div className="container">
                <div className="sofa-collection-txt">
                  <h2>unlimited sofa collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="sofa-collection-price">
                    <h4>
                      strting from <span>$ 199</span>
                    </h4>
                  </div>
                  <button
                    className="btn-cart welcome-add-cart sofa-collection-btn"
                  >
                    view more
                  </button>
                </div>
              </div>
            </div>
            <div className="sofa-collection collectionbg2">
              <div className="container">
                <div className="sofa-collection-txt">
                  <h2>unlimited dainning table collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="sofa-collection-price">
                    <h4>
                      strting from <span>$ 299</span>
                    </h4>
                  </div>
                  <button
                    className="btn-cart welcome-add-cart sofa-collection-btn"
                  >
                    view more
                  </button>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}
