import React, { useState } from "react";
import { AddItemsToCart } from "../../../api/api";
import { getToken } from "../../utls/Session";
import Magnifier from "react-magnifier";


export default function Products({ product, setCartCount, SetloginPopUp }) {
  const currentProduct = product.products.userData.product;
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const quantityChange = (event) => {
    if (event.target.value === "+") {
      setQuantity(quantity + 1);
    }
    if (event.target.value === "-") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const onAddToCartClick = () => {
    setLoading(true);
    const token = getToken();

    if (token != undefined) {
      let userData = {};
      userData = {
        authorizationToken: getToken(),
        productId: currentProduct._id,
        productDetails: currentProduct,
        quantity: quantity,
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
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li className="active">{currentProduct.productName}</li>
            </ol>
          </div>
          <div className="row">
            <div className="col-sm-12 padding-right">
              <div className="product-details">
                <div className="col-xs-12 col-md-5 product-image">
                  <div
                    className="product_details_card card-1"
                    style={{ textAlign: "center" }}
                  >
                    <Magnifier
                      mgShape="square"
                      src={currentProduct.productimage}
                    />
                  </div>
                  <div id="similar-product"></div>
                </div>
                <div className="col-xs-12 col-md-7">
                  <div className="product-information">
                    <h2>{currentProduct.productName}</h2>
                    <p>Web ID: {currentProduct._id}</p>
                    <span>
                      <span>CAD ${currentProduct.productprice}</span>
                    </span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: currentProduct.productdescription,
                      }}
                    ></div>
                    <br />
                    <p>
                      <form id="myform" class="quantity">
                        <input
                          type="button"
                          onClick={quantityChange}
                          value="-"
                          class="qtyminus minus"
                          field="quantity"
                        />
                        <input
                          type="text"
                          name="quantity"
                          value={quantity}
                          class="qty"
                          min={1}
                        />
                        <input
                          type="button"
                          onClick={quantityChange}
                          value="+"
                          class="qtyplus plus"
                          field="quantity"
                        />
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
                              style={{ color: "white", marginRight: "5px" }}
                            ></i>
                          ) : (
                            <i className="fa fa-shopping-cart"></i>
                          )}
                          Add to cart
                        </button>
                      </form>
                    </p>
                  </div>
                </div>
              </div>

              <div className="category-tab shop-details-tab">
                <div className="col-sm-12">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#details" data-toggle="tab">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#reviews" data-toggle="tab">
                        Specifications
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade active in" id="details">
                    <div
                      className="col-sm-12"
                      dangerouslySetInnerHTML={{
                        __html: currentProduct.productfeatures,
                      }}
                    ></div>
                  </div>
                  <div className="tab-pane fade" id="reviews">
                    <div
                      className="col-sm-12"
                      dangerouslySetInnerHTML={{
                        __html: currentProduct.productspecifications,
                      }}
                    ></div>
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
