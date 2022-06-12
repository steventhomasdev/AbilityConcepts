import React, { useEffect, useState } from "react";
import { getToken, removeToken } from "../../utls/Session";

export default function NavBar({
  SetloginPopUp,
  isLogin,
  SetisLogin,
  accountDetails,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [searchArea, setsearchArea] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);

  let navbarClasses = [
    "navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy",
  ];

  const onLoginClick = () => {
    SetloginPopUp(true);
  };

  const onLogoutClick = () => {
    removeToken();
    SetisLogin(false);
  };

  const onSearchClickToggle = () => {
    searchArea ? setsearchArea(false) : setsearchArea(true);
  };

  const userDropDownToggle = () => {
    userDropDown ? setUserDropDown(false) : setUserDropDown(true);
  };

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

  if (scrolled) {
    navbarClasses.push("sticked");
  }

  if (searchArea) {
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
              <div
                className="top-search"
                style={searchArea ? { display: "block" } : { display: "none" }}
              >
                <div className="container">
                  <div className="input-group d-flex">
                    <span className="input-group-addon">
                      <i className="fa fa-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button className="search-btn1">Search</button>
                    <span
                      onClick={onSearchClickToggle}
                      className="input-group-addon close-search"
                    >
                      <i className="fa fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="attr-nav">
                  <ul>
                    {isLogin ? (
                      <li
                        onClick={userDropDownToggle}
                        className="sub-menu-con"
                        style={{ display: "block" }}
                      >
                        <a className="user-prof">
                          <span>{accountDetails[0]}</span>
                          <span className="lnr lnr-chevron-down"></span>
                        </a>
                        <div
                          style={
                            userDropDown
                              ? { display: "block" }
                              : { display: "none" }
                          }
                        >
                          <ul className="dropdown-menu cart-list s-cate" style={{ display: "block" }}>
                            <li className="cart-list-txt">
                              <a>My Account</a>
                            </li>
                            <li className="cart-list-txt">
                              <a>My orders</a>
                            </li>
                            <li className="cart-list-txt">
                              <a onClick={onLogoutClick}>Logout</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    ) : (
                      //plans to give user icon
                      <li onClick={onLoginClick} className="loginbtn">
                        <button>Login</button>
                      </li>
                    )}

                    <li className="search">
                      <a onClick={onSearchClickToggle}>
                        <span className="lnr lnr-magnifier"></span>
                      </a>
                    </li>

                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span className="lnr lnr-cart"></span>
                        <span className="badge badge-bg-1">2</span>
                      </a>
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
                  <a className="navbar-brand">
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
                      <a>home</a>
                    </li>
                    <li className="scroll">
                      <a>Home modification</a>
                    </li>
                    <li className="scroll">
                      <a>Rentals</a>
                    </li>
                    <li className="scroll">
                      <a>Office</a>
                    </li>
                    <li className="scroll">
                      <a>contact</a>
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
