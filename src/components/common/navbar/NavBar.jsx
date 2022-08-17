import React, { useEffect, useState } from "react";
import { getToken, removeToken } from "../../utls/Session";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { GetCartCount, GetProducts } from "../../../api/api";
import SpinnerSmall from "../spinnersmall/SpinnerSmall";

export default function NavBar({
  SetloginPopUp,
  isLogin,
  SetisLogin,
  accountDetails,
  cartCount,
  setCartCount,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [searchArea, setsearchArea] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const [servicesDropDown, setServicesDropDown] = useState(false);
  const [fundingDropDown, setFundingDropDown] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [cartCountRefresh, setCartCountReresh] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  let navbarClasses = [
    "navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy",
  ];

  if (isLogin && cartCountRefresh) {
    let userData = {};
    userData = {
      authorizationToken: getToken(),
    };
    GetCartCount(userData)
      .then((data) => setCartCount(data.body.quantity))
      .then(setCartCountReresh(false));
  }
  const onLoginClick = () => {
    setCartCountReresh(true);
    SetloginPopUp(true);
  };

  const onLogoutClick = () => {
    removeToken();
    SetisLogin(false);
    setCartCount(0);
  };

  const onSearchClickToggle = () => {
    searchArea ? setsearchArea(false) : setsearchArea(true);
  };

  const userDropDownToggle = () => {
    userDropDown ? setUserDropDown(false) : setUserDropDown(true);
  };

  const servicesDropDownToggle = () => {
    servicesDropDown ? setServicesDropDown(false) : setServicesDropDown(true);
  };

  const fundingDropDownToggle = () => {
    fundingDropDown ? setFundingDropDown(false) : setFundingDropDown(true);
  };

  const onSearchButtonClick = () => {
    setLoading(true);
    const userData = {
      searchString: searchString,
    };

    GetProducts(userData).then((data) => {
      navigate("/productlist", {
        state: {
          products: { data },
        },
      });
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const getInputValue = (event) => {
    const userValue = event.target.value;
    setSearchString(userValue);
  };

  const onCartClick = () => {
    navigate("/cart", {});
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const onMyAccountClick = () => {
    navigate("/account", {});
  };

  const onMyOrdersClick = () => {
    navigate("/myorders", {});
  };

  const OnServiceEducationClick = () => {
    navigate("/serviceeducation", {});
  };

  const OnShippingProcedureClick = () => {
    navigate("/shippingprocedure", {});
  };

  const OnHomeModificationClick = () => {
    navigate("/homemodification");
  };

  const OnRepairServiceClick = () => {
    navigate("/repairservices");
  };

  const onDropDownItemClick = (value) => {
    navigate("/funding", {
      state: {
        page: value.target.innerText,
      },
    });
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
                      onChange={getInputValue}
                    />
                    {loading ? (
                      <div className="loading">
                        <SpinnerSmall />
                      </div>
                    ) : (
                      <button
                        className="search-btn1"
                        onClick={onSearchButtonClick}
                      >
                        Search
                      </button>
                    )}
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
                          <ul
                            className="dropdown-menu cart-list s-cate"
                            style={{ display: "block" }}
                          >
                            <li className="cart-list-txt">
                              <a onClick={onMyAccountClick}>My Account</a>
                            </li>
                            <li className="cart-list-txt">
                              <a onClick={onMyOrdersClick}>My orders</a>
                            </li>
                            <li className="cart-list-txt">
                              <a onClick={onLogoutClick}>Logout</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    ) : (
                      <li onClick={onLoginClick} className="loginbtn">
                        <button>Login</button>
                      </li>
                    )}

                    <li className="search">
                      <a onClick={onSearchClickToggle}>
                        <span className="lnr lnr-magnifier"></span>
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={onCartClick}
                      >
                        <span className="lnr lnr-cart"></span>
                        <span className="badge badge-bg-1">{cartCount}</span>
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
                  <span className="Head1">Ability</span>
                  <span className="Head2">Concepts</span>
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
                    <li>
                      <NavLink
                        exact="true"
                        activeclassname="scroll active"
                        end
                        to={"/home"}
                      >
                        home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact="true"
                        activeclassname="scroll active"
                        end
                        to={"/productlist"}
                      >
                        Products
                      </NavLink>
                    </li>
                    <li
                      onClick={servicesDropDownToggle}
                    >
                      <a>
                      Services <i className="fa fa-caret-down"></i>
                      </a>
                      <div
                        style={
                          servicesDropDown
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        <ul
                          className="dropdown-menu cart-list s-cate"
                          style={{ display: "block" }}
                        >
                          <li className="cart-list-txt">
                            <a onClick={OnHomeModificationClick}>
                              Home modification
                            </a>
                          </li>
                          <li className="cart-list-txt">
                            <a onClick={OnRepairServiceClick}>
                              Repair Services
                            </a>
                          </li>
                          <li className="cart-list-txt">
                            <a onClick={OnServiceEducationClick}>
                              Service Education
                            </a>
                          </li>
                          <li className="cart-list-txt">
                            <a onClick={OnShippingProcedureClick}>
                              Shipping Procedure
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={fundingDropDownToggle}
                    >
                      <a>
                        Funding <i className="fa fa-caret-down"></i>
                      </a>

                      <div
                        style={
                          fundingDropDown
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        <ul
                          className="dropdown-menu cart-list s-cate"
                          style={{ display: "block" }}
                        >
                          <li className="cart-list-txt">
                            <a onClick={onDropDownItemClick}>ADP</a>
                          </li>
                          <li className="cart-list-txt">
                            <a onClick={onDropDownItemClick}>ODSP</a>
                          </li>
                          <li className="cart-list-txt">
                            <a onClick={onDropDownItemClick}>MS Society</a>
                          </li>
                          <li className="cart-list-txt">
                            <a onClick={onDropDownItemClick}>VAC</a>
                          </li>
                          <li className="cart-list-txt">
                            <a onClick={onDropDownItemClick}>WSIB</a>
                          </li>
                          <li className="cart-list-txt">
                            <a onClick={onDropDownItemClick}>
                              Ontario March Of Dimes
                            </a>
                          </li>
                          <li className="cart-list-txt">
                            <a onClick={onDropDownItemClick}>CHMC</a>
                          </li>
                          <li className="cart-list-txt">
                            <a onClick={onDropDownItemClick}>Other Funding</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <NavLink
                        exact="true"
                        activeclassname="scroll active"
                        end
                        to={"/aboutus"}
                      >
                        About Us
                      </NavLink>
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
