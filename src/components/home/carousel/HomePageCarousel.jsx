import React from "react";
import slider1 from "../../../images/slider/slider1.png";
import slider2 from "../../../images/slider/slider2.png";
import slider3 from "../../../images/slider/slider3.png";


export default function HomePageCarousel() {
  return (
    <div>
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li data-target="#header-carousel" data-slide-to="0" class="active">
            <span class="small-circle"></span>
          </li>
          <li data-target="#header-carousel" data-slide-to="1">
            <span class="small-circle"></span>
          </li>
          <li data-target="#header-carousel" data-slide-to="2">
            <span class="small-circle"></span>
          </li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="single-slide-item slide1">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>
                            Pride, Zero Turn 8, 4 Wheel Scooter, ZEROTURN8
                          </h2>
                          <p>
                            The Zero Turn 8 by Pride is the first 4-wheel indoor
                            scooter. Pride’s Zero Turn 8 scooter takes a huge
                            leap forward in scooter performance with its Zero
                            Turn Technology - combining the stable ride of a
                            four-wheel scooter with the tight turning radius and
                            superior handling of a three-wheel. Responsive dual
                            motors and patented CTS suspension offer improved
                            traction and a smooth ride.
                          </p>
                          <div className="packages-price">
                            <p>$ 3,190.00</p>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart"
                            onClick="window.location.href='#'"
                          >
                            <span className="lnr lnr-plus-circle"></span>
                            add <span>to</span> cart
                          </button>
                          <button
                            className="btn-cart welcome-add-cart welcome-more-info"
                            onClick="window.location.href='#'"
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
                            src="https://medicsmobility.ca/media/catalog/product/cache/ec8beb969d54451fb3a669ad74f1c29b/z/e/zero_turn_8_beauty_r_perspective_sapphire_blue_1.jpg"
                            alt="slider image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="single-slide-item slide2">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>mapple wood accent chair</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiuiana smod tempor ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip.
                          </p>
                          <div className="packages-price">
                            <p>
                              $ 199.00
                              <del>$ 299.00</del>
                            </p>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart"
                            onClick="window.location.href='#'"
                          >
                            <span className="lnr lnr-plus-circle"></span>
                            add <span>to</span> cart
                          </button>
                          <button
                            className="btn-cart welcome-add-cart welcome-more-info"
                            onClick="window.location.href='#'"
                          >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img src={slider2} alt="slider image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="single-slide-item slide3">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>valvet accent arm chair</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiuiana smod tempor ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip.
                          </p>
                          <div className="packages-price">
                            <p>
                              $ 299.00
                              <del>$ 399.00</del>
                            </p>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart"
                            onClick="window.location.href='#'"
                          >
                            <span className="lnr lnr-plus-circle"></span>
                            add <span>to</span> cart
                          </button>
                          <button
                            className="btn-cart welcome-add-cart welcome-more-info"
                            onClick="window.location.href='#'"
                          >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img src={slider3} alt="slider image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
