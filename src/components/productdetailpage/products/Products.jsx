import React, { useState } from "react";
import { AddItemsToCart } from "../../../api/api";
import { getToken } from "../../utls/Session";

export default function Products({ product, setCartCount, SetloginPopUp }) {
  const currentProduct = product.products.userData.product;
  const [loading, setLoading] = useState(false);

  const onAddToCartClick = () => {
    setLoading(true);
    const token = getToken();

    if (token != undefined) {
      let userData = {};
      userData = {
        authorizationToken: getToken(),
        productId: currentProduct._id,
        productDetails: currentProduct,
        quantity: "1",
      };
      AddItemsToCart(userData).then((data) => setCartCount(data.body.quantity));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
      SetloginPopUp(true);
    }
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 padding-right">
              <div className="product-details">
                <div className="col-sm-5">
                  <div className="view-product">
                    <img
                      src={currentProduct.productimage}
                      alt={currentProduct.productName}
                    />
                  </div>
                  <div
                    id="similar-product"
                    className="carousel slide"
                    data-ride="carousel"
                  ></div>
                </div>
                <div className="col-sm-7">
                  <div className="product-information">
                    <h2>{currentProduct.productName}</h2>
                    <p>Web ID: {currentProduct._id}</p>
                    <span>
                      <span>CAD ${currentProduct.productprice}</span>
                      <label>Quantity:</label>
                      <input type="text" value="1" />
                      <button
                        type="button"
                        className="btn btn-fefault cart"
                        onClick={onAddToCartClick}
                      >
                        {" "}
                        {loading ? (
                          <i
                            class="fa fa-spinner"
                            aria-hidden="true"
                            style={{ color: "white", marginRight: "5px"}}
                          ></i>
                        ) : (
                          <i className="fa fa-shopping-cart"></i>
                        )}
                        Add to cart
                      </button>
                    </span>
                    <p>
                      <b>Availability:</b> In Stock
                    </p>
                    <p>
                      <b>Condition:</b> New
                    </p>
                    <p>
                      <b>Brand:</b> E-SHOPPER
                    </p>
                    <a></a>
                  </div>
                </div>
              </div>

              <div className="category-tab shop-details-tab">
                <div className="col-sm-12">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#details" data-toggle="tab">
                        Details
                      </a>
                    </li>
                    <li>
                      <a href="#reviews" data-toggle="tab">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade active in" id="details">
                    <div className="col-sm-12">
                      <p>{currentProduct.productdescription}</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="reviews">
                    <div className="col-sm-12">
                      <ul>
                        <li>
                          <a href="">
                            <i className="fa fa-user"></i>EUGEN
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-clock-o"></i>12:41 PM
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-calendar-o"></i>31 DEC 2014
                          </a>
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <p className="newreview">
                        <b>Write Your Review</b>
                      </p>

                      <form action="#">
                        <span>
                          <input type="text" placeholder="Your Name" />
                          <input type="email" placeholder="Email Address" />
                        </span>
                        <textarea name=""></textarea>
                        <b>Rating: </b>{" "}
                        <img
                          src="assets/images/product-details/rating.png"
                          alt=""
                        />
                        <button
                          type="button"
                          className="btn btn-default pull-right"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
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
