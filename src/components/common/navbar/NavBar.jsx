import React, { useEffect, useState } from "react";
import { removeToken } from "../../utls/Session";

export default function NavBar({ SetloginPopUp, isLogin, SetisLogin }) {
  const [scrolled, setScrolled] = useState(false);

  const onLoginClick = () => {
    SetloginPopUp(true);
  };

  const onLogoutClick = () =>{
    removeToken();
    SetisLogin(false);
  }

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = [
    "navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy",
  ];
  if (scrolled) {
    navbarClasses.push("sticked");
  }


  return (
    <>
      <div className="top-area">
        <div className="header-area">
          <div className="wrap-sticky">
            <nav
              className={navbarClasses.join(" ")}
              data-minus-value-desktop="70"
              data-minus-value-mobile="55"
              data-speed="1000"
            >
              <div className="top-search">
                <div className="container">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <span className="input-group-addon close-search">
                      <i className="fa fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="attr-nav">
                  <ul>
                    {
                      isLogin ?                     
                      <li onClick={onLogoutClick} className="loginbtn">
                        <button>Logout</button>
                      </li>
                      :
                      <li onClick={onLoginClick} className="loginbtn">
                      <button>Login</button>
                      </li>
                    }

                    <li className="search">
                      <a href="#">
                        <span className="lnr lnr-magnifier"></span>
                      </a>
                    </li>

                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span className="lnr lnr-cart"></span>
                        <span className="badge badge-bg-1">2</span>
                      </a>
                      <ul className="dropdown-menu cart-list s-cate">
                        <li className="single-cart-list">
                          <a href="#" className="photo">
                            <img
                              src="assets/images/collection/arrivals1.png"
                              className="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div className="cart-list-txt">
                            <h6>
                              <a href="#">
                                arm <br /> chair
                              </a>
                            </h6>
                            <p>
                              1 x - <span className="price">$180.00</span>
                            </p>
                          </div>
                          <div className="cart-close">
                            <span className="lnr lnr-cross"></span>
                          </div>
                        </li>
                        <li className="single-cart-list">
                          <a href="#" className="photo">
                            <img
                              src="assets/images/collection/arrivals2.png"
                              className="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div className="cart-list-txt">
                            <h6>
                              <a href="#">
                                single <br /> armchair
                              </a>
                            </h6>
                            <p>
                              1 x - <span className="price">$180.00</span>
                            </p>
                          </div>
                          <div className="cart-close">
                            <span className="lnr lnr-cross"></span>
                          </div>
                        </li>
                        <li className="single-cart-list">
                          <a href="#" className="photo">
                            <img
                              src="assets/images/collection/arrivals3.png"
                              className="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div className="cart-list-txt">
                            <h6>
                              <a href="#">
                                wooden arn <br /> chair
                              </a>
                            </h6>
                            <p>
                              1 x - <span className="price">$180.00</span>
                            </p>
                          </div>
                          <div className="cart-close">
                            <span className="lnr lnr-cross"></span>
                          </div>
                        </li>
                        <li className="total">
                          <span>Total: $0.00</span>
                          <button
                            className="btn-cart pull-right"
                            onclick="window.location.href='#'"
                          >
                            view cart
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand" href="index.html">
                    <img
                      src="assets/images/logo.png"
                      alt=""
                      className="ability-logo"
                    />
                  </a>
                </div>

                <div
                  className="collapse navbar-collapse menu-ui-design"
                  id="navbar-menu"
                >
                  <ul
                    className="nav navbar-nav navbar-center"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li className=" scroll active">
                      <a href="#home">home</a>
                    </li>
                    <li className="scroll">
                      <a href="#homemofdification">Home modification</a>
                    </li>
                    <li className="scroll">
                      <a href="#rent">Rentals</a>
                    </li>
                    <li className="scroll">
                      <a href="#office">Office</a>
                    </li>
                    <li className="scroll">
                      <a href="#newsletter">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
}
