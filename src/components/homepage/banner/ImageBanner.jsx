import React from "react";
import { useNavigate } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

export default function ImageBanner() {
  const navigate = useNavigate();

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
                  <h2>Ability Concepts</h2>
                  <p>
                    Ability Concepts is committed to improve the quality of
                    lives for people with disabilities. In achieving this
                    mandate, we have made available a wide spectrum of products
                    and services tailored to meet the individualistic needs of
                    patients, health care professionals, governmental bodies and
                    insurance corporations.
                  </p>
                </div>
              </div>
            </div>
            <div className="sofa-collection collectionbg2">
              <div className="container">
                <div className="sofa-collection-txt">
                  <h2>Misson statement</h2>
                  <p>
                    Ability Concepts will lead the way to the future of
                    accessibility, mobility, health and wellness, enriching
                    Canadian lives and communities with innovative ideas and
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}
