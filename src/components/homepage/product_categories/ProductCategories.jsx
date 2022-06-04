import React, { useState } from "react";
import { GetProductsCat } from "../../../api/api";

export default function ProductCategories() {
  let [productCatList, setproductCatList] = useState();
  GetProductsCat().then((data) => setproductCatList(data));

  return (
    <div>
      <section id="new-arrivals" className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>Product Categories</h2>
          </div>
          <div className="new-arrivals-content">
            <div className="row">
              {productCatList?.map((categories) => (
                <div className="col-md-3 col-sm-4">
                  <div className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                      <img
                        src={categories.image}
                        alt={categories.cat}
                      />
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
