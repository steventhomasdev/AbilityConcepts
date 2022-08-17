import React from "react";
import { useNavigate } from "react-router-dom";

export default function FooterDetails() {
  const navigate = useNavigate();
  return (
    <div>
      <section id="newsletter" className="newsletter">
        <div className="container" style={{textAlign: "center"}}>
          <div className="hm-footer-details">
            <div className="row">
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>Information</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                      <a onClick={()=>{navigate("/aboutus")}}>About Us</a>
                      </li>
                      <li>
                        <a onClick={()=>{navigate("/funding")}}>Funding</a>
                      </li>
                      <li>
                        <a onClick={()=>{navigate("/productlist")}}>Products</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>Collections</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <a onClick={()=>{navigate("/productlist")}}>Rentals</a>
                      </li>
                      <li>
                        <a onClick={()=>{navigate("/productlist")}}>Wheelchair</a>
                      </li>
                      <li>
                        <a onClick={()=>{navigate("/productlist")}}>Bed</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>My account</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <a href="#">my account</a>
                      </li>
                      <li>
                        <a href="#">order history</a>
                      </li>
                      <li>
                        <a href="#">my cart</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>Services</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <a onClick={()=>{navigate("/homemodification")}}>Home modification</a>
                      </li>
                      <li>
                        <a onClick={()=>{navigate("/repairservices")}}>Repair services</a>
                      </li>
                      <li>
                        <a onClick={()=>{navigate("/serviceeducation")}}>Service education</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
