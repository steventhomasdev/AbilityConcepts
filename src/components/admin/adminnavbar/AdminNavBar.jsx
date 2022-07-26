import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { removeAdmin, removeToken } from "../../utls/Session";

export default function AdminNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  let navbarClasses = [
    "navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy",
  ];

  const onLogoutClick = () => {
    removeToken();
    removeAdmin();
    navigate("/home", {});
    window.location.reload(false);
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
              <div className="container">
                <div className="attr-nav">
                  <ul>
                    <li onClick={onLogoutClick} className="loginbtn">
                      <button>Logout</button>
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
                        to={"/orders"}
                      >
                        Orders
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
                    <li>
                      <NavLink
                        exact="true"
                        activeclassname="scroll active"
                        end
                        to={"/addproducts"}
                      >
                        Add Products
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
