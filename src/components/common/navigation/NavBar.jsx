import React from "react";
import "./bootsnav.css";
import logo from "../../../images/logo.png";


export default function NavBar() {
  return (
    <div>
      <div className="top-area">
        <div className="header-area">
          <nav
            className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
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
                  <li className="loginbtn">
                    <button>Login</button>
                  </li>
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
                  <img src={logo} alt="" className="ability-logo" />
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
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
