import React from "react";
import slider1 from "../../images/slider/slider1.png";
import slider2 from "../../images/slider/slider2.png";
import slider3 from "../../images/slider/slider3.png";
import arivals1 from "../../images/collection/arrivals1.png";
import arivals2 from "../../images/collection/arrivals2.png";
import arivals3 from "../../images/collection/arrivals3.png";
import arivals4 from "../../images/collection/arrivals4.png";
import arivals5 from "../../images/collection/arrivals5.png";
import arivals6 from "../../images/collection/arrivals6.png";
import arivals7 from "../../images/collection/arrivals7.png";
import arivals8 from "../../images/collection/arrivals8.png";
import p1 from "../../images/populer-products/p1.png";
import p2 from "../../images/populer-products/p2.png";
import p3 from "../../images/populer-products/p3.png";
import f1 from "../../images/features/f1.jpg";
import f2 from "../../images/features/f2.jpg";
import f3 from "../../images/features/f3.jpg";
import f4 from "../../images/features/f4.jpg";

export default function Home() {
  return (
    <div>
      <header id="home" className="welcome-hero">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
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
                            <h2>cloth covered accent chair</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiuiana smod tempor ut
                              labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip.
                            </p>
                            <div className="packages-price">
                              <p>
                                $ 399.00
                                <del>$ 499.00</del>
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
                            <img src={slider1} alt="slider image" />
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
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiuiana smod tempor ut
                              labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip.
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
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiuiana smod tempor ut
                              labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip.
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

        <section id="populer-products" className="populer-products">
          <div className="container">
            <div className="populer-products-content">
              <div className="row">
                <div className="col-md-3">
                  <div className="single-populer-products">
                    <div className="single-populer-product-img mt40">
                      <img src={p1} alt="populer-products images" />
                    </div>
                    <h2>
                      <a href="#">arm chair</a>
                    </h2>
                    <div className="single-populer-products-para">
                      <p>
                        Nemo enim ipsam voluptatem quia volu ptas sit asperna
                        aut odit aut fugit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-populer-products">
                    <div className="single-inner-populer-products">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="single-inner-populer-product-img">
                            <img src={p2} alt="populer-products images" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                          <div className="single-inner-populer-product-txt">
                            <h2>
                              <a href="#">
                                latest designed stool <span>and</span> chair
                              </a>
                            </h2>
                            <p>
                              Edi ut perspiciatis unde omnis iste natusina error
                              sit voluptatem accusantium doloret mque
                              laudantium, totam rem aperiam.
                            </p>
                            <div className="populer-products-price">
                              <h4>
                                Sales Start from <span>$99.00</span>
                              </h4>
                            </div>
                            <button
                              className="btn-cart welcome-add-cart populer-products-btn"
                              onClick="window.location.href='#'"
                            >
                              discover more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single-populer-products">
                    <div className="single-populer-products">
                      <div className="single-populer-product-img">
                        <img src={p3} alt="populer-products images" />
                      </div>
                      <h2>
                        <a href="#">hanging lamp</a>
                      </h2>
                      <div className="single-populer-products-para">
                        <p>
                          Nemo enim ipsam voluptatem quia volu ptas sit asperna
                          aut odit aut fugit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="new-arrivals" className="new-arrivals">
          <div className="container">
            <div className="section-header">
              <h2>new arrivals</h2>
            </div>
            <div className="new-arrivals-content">
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                      <img src={arivals1} alt="new-arrivals images" />
                      <div className="single-new-arrival-bg-overlay"></div>
                      <div className="sale bg-1">
                        <p>sale</p>
                      </div>
                      <div className="new-arrival-cart">
                        <p>
                          <span className="lnr lnr-cart"></span>
                          <a href="#">
                            add <span>to </span> cart
                          </a>
                        </p>
                        <p className="arrival-review pull-right">
                          <span className="lnr lnr-heart"></span>
                          <span className="lnr lnr-frame-expand"></span>
                        </p>
                      </div>
                    </div>
                    <h4>
                      <a href="#">wooden chair</a>
                    </h4>
                    <p className="arrival-product-price">$65.00</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                      <img src={arivals2} alt="new-arrivals images" />
                      <div className="single-new-arrival-bg-overlay"></div>
                      <div className="sale bg-2">
                        <p>sale</p>
                      </div>
                      <div className="new-arrival-cart">
                        <p>
                          <span className="lnr lnr-cart"></span>
                          <a href="#">
                            add <span>to </span> cart
                          </a>
                        </p>
                        <p className="arrival-review pull-right">
                          <span className="lnr lnr-heart"></span>
                          <span className="lnr lnr-frame-expand"></span>
                        </p>
                      </div>
                    </div>
                    <h4>
                      <a href="#">single armchair</a>
                    </h4>
                    <p className="arrival-product-price">$80.00</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                      <img src={arivals3} alt="new-arrivals images" />
                      <div className="single-new-arrival-bg-overlay"></div>
                      <div className="new-arrival-cart">
                        <p>
                          <span className="lnr lnr-cart"></span>
                          <a href="#">
                            add <span>to </span> cart
                          </a>
                        </p>
                        <p className="arrival-review pull-right">
                          <span className="lnr lnr-heart"></span>
                          <span className="lnr lnr-frame-expand"></span>
                        </p>
                      </div>
                    </div>
                    <h4>
                      <a href="#">wooden armchair</a>
                    </h4>
                    <p className="arrival-product-price">$40.00</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                      <img src={arivals4} alt="new-arrivals images" />
                      <div className="single-new-arrival-bg-overlay"></div>
                      <div className="sale bg-1">
                        <p>sale</p>
                      </div>
                      <div className="new-arrival-cart">
                        <p>
                          <span className="lnr lnr-cart"></span>
                          <a href="#">
                            add <span>to </span> cart
                          </a>
                        </p>
                        <p className="arrival-review pull-right">
                          <span className="lnr lnr-heart"></span>
                          <span className="lnr lnr-frame-expand"></span>
                        </p>
                      </div>
                    </div>
                    <h4>
                      <a href="#">stylish chair</a>
                    </h4>
                    <p className="arrival-product-price">$100.00</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                      <img src={arivals5} alt="new-arrivals images" />
                      <div className="single-new-arrival-bg-overlay"></div>
                      <div className="new-arrival-cart">
                        <p>
                          <span className="lnr lnr-cart"></span>
                          <a href="#">
                            add <span>to </span> cart
                          </a>
                        </p>
                        <p className="arrival-review pull-right">
                          <span className="lnr lnr-heart"></span>
                          <span className="lnr lnr-frame-expand"></span>
                        </p>
                      </div>
                    </div>
                    <h4>
                      <a href="#">modern chair</a>
                    </h4>
                    <p className="arrival-product-price">$120.00</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                      <img src={arivals6} alt="new-arrivals images" />
                      <div className="single-new-arrival-bg-overlay"></div>
                      <div className="sale bg-1">
                        <p>sale</p>
                      </div>
                      <div className="new-arrival-cart">
                        <p>
                          <span className="lnr lnr-cart"></span>
                          <a href="#">
                            add <span>to </span> cart
                          </a>
                        </p>
                        <p className="arrival-review pull-right">
                          <span className="lnr lnr-heart"></span>
                          <span className="lnr lnr-frame-expand"></span>
                        </p>
                      </div>
                    </div>
                    <h4>
                      <a href="#">mapple wood dinning table</a>
                    </h4>
                    <p className="arrival-product-price">$140.00</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                      <img src={arivals7} alt="new-arrivals images" />
                      <div className="single-new-arrival-bg-overlay"></div>
                      <div className="sale bg-2">
                        <p>sale</p>
                      </div>
                      <div className="new-arrival-cart">
                        <p>
                          <span className="lnr lnr-cart"></span>
                          <a href="#">
                            add <span>to </span> cart
                          </a>
                        </p>
                        <p className="arrival-review pull-right">
                          <span className="lnr lnr-heart"></span>
                          <span className="lnr lnr-frame-expand"></span>
                        </p>
                      </div>
                    </div>
                    <h4>
                      <a href="#">arm chair</a>
                    </h4>
                    <p className="arrival-product-price">$90.00</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                      <img src={arivals8} alt="new-arrivals images" />
                      <div className="single-new-arrival-bg-overlay"></div>
                      <div className="new-arrival-cart">
                        <p>
                          <span className="lnr lnr-cart"></span>
                          <a href="#">
                            add <span>to </span> cart
                          </a>
                        </p>
                        <p className="arrival-review pull-right">
                          <span className="lnr lnr-heart"></span>
                          <span className="lnr lnr-frame-expand"></span>
                        </p>
                      </div>
                    </div>
                    <h4>
                      <a href="#">wooden bed</a>
                    </h4>
                    <p className="arrival-product-price">$140.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sofa-collection">
          <div className="owl-carousel owl-theme" id="collection-carousel">
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
                    onClick="window.location.href='#'"
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
                    onClick="window.location.href='#'"
                  >
                    view more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feature" className="feature">
          <div className="container">
            <div className="section-header">
              <h2>featured products</h2>
            </div>
            <div className="feature-content">
              <div className="row">
                <div className="col-sm-3">
                  <div className="single-feature">
                    <img src={f1} alt="feature image" />
                    <div className="single-feature-txt text-center">
                      <p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="spacial-feature-icon">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="feature-review">(45 review)</span>
                      </p>
                      <h3>
                        <a href="#">designed sofa</a>
                      </h3>
                      <h5>$160.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-feature">
                    <img src={f2} alt="feature image" />
                    <div className="single-feature-txt text-center">
                      <p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="spacial-feature-icon">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="feature-review">(45 review)</span>
                      </p>
                      <h3>
                        <a href="#">dinning table </a>
                      </h3>
                      <h5>$200.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-feature">
                    <img src={f3} alt="feature image" />
                    <div className="single-feature-txt text-center">
                      <p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="spacial-feature-icon">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="feature-review">(45 review)</span>
                      </p>
                      <h3>
                        <a href="#">chair and table</a>
                      </h3>
                      <h5>$100.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-feature">
                    <img src={f4} alt="feature image" />
                    <div className="single-feature-txt text-center">
                      <p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="spacial-feature-icon">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="feature-review">(45 review)</span>
                      </p>
                      <h3>
                        <a href="#">modern arm chair</a>
                      </h3>
                      <h5>$299.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
