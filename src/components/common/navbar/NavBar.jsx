import React, { useEffect, useState } from "react";
import { getToken, removeToken } from "../../utls/Session";
import { useNavigate, useLocation } from "react-router-dom";
import { GetCartCount, GetProducts } from "../../../api/api";

export default function NavBar({
  SetloginPopUp,
  isLogin,
  SetisLogin,
  accountDetails,
  cartCount,
  setCartCount
}) {
  const [scrolled, setScrolled] = useState(false);
  const [searchArea, setsearchArea] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [cartCountRefresh, setCartCountReresh] = useState(true);
  const navigate = useNavigate();
  const { state } = useLocation();

  let navbarClasses = [
    "navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy",
  ];

  if(isLogin && cartCountRefresh){

    let userData = {};
		userData = {
			authorizationToken: getToken(),
		}
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

  const onSearchButtonClick = () => {

    const userData = {
      searchString: searchString
    };

    GetProducts(userData)
    .then((data) => {
      navigate("/productlist", {
        state: {
          products: { data },
        },
      })
    })
  }

  const getInputValue = (event)=>{
    const userValue = event.target.value;
    setSearchString(userValue);
  };

  const onCartClick = () => {
    navigate("/cart", {})
  }

  const onHomeButtonClick = () => {
    navigate("/home", {})
  }

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const onProductClick = () => {
    document.getElementById('new-arrivals').scrollIntoView({behavior: 'smooth'}) 
  }

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
                    <button className="search-btn1" onClick={onSearchButtonClick}>Search</button>
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
                    {isLogin? (
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
                      <a className="dropdown-toggle" data-toggle="dropdown" onClick={onCartClick} >
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
                      <a onClick={onHomeButtonClick}>home</a>
                    </li>
                    <li className="scroll">
                      <a onClick={onProductClick}>Products</a>
                    </li>
                    <li className="scroll">
                      <a>Home modification</a>
                    </li>
                    <li className="scroll">
                      <a>Rentals</a>
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
