import React, { useState, useEffect } from "react";
import "./style/Style.css";
import { useLocation } from "react-router-dom";

export default function InvoicePage() {
  const { state } = useLocation();
  const [orderProductList, setOrderProductList] = useState();

  //   console.log(state);

  useEffect(() => {
    let productList = [];
    state[0].products?.map((product) => {
      productList.push(product);
      setOrderProductList(productList);
    });
  }, [state]);

  const getItemTotal = (productprice, quantity) => {
    const total = Number(productprice.replace(/\,/g, "")) * Number(quantity);
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getCartTotal = () => {
    let totalPrice = 0;
    for (let i in orderProductList) {
      totalPrice += Number(
        getItemTotal(
          orderProductList[i].productDetails.productprice,
          orderProductList[i].quantity
        ).replace(/\,/g, "")
      );
    }

    return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="row">
      <section id="cart_items">
        <div className="container">
          <div className="container cartTable">
            <div className="col-xs-8 cartTable">
              <div className="grid invoice">
                <div className="grid-body">
                  <div className="invoice-title">
                    <div className="row">
                      <div className="col-xs-12">
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
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-xs-12">
                        <h2>
                          invoice
                          <br />
                          <span className="small">Order #{state[0]._id}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-xs-6">
                      <address>
                        <strong>Billed To:</strong>
                        <br />
                        {state[0].billingAddress.name}
                        <br />
                        {state[0].billingAddress.address}
                        <br />
                        {state[0].billingAddress.city},{" "}
                        {state[0].billingAddress.country}{" "}
                        {state[0].billingAddress.zipCode}
                        <br />
                        <abbr title="Phone">Phone:</abbr>{" "}
                        {state[0].billingAddress.phone}
                      </address>
                    </div>
                    <div className="col-xs-6 text-right">
                      <address>
                        <strong>Shipped To:</strong>
                        <br />
                        {state[0].shippingAddress.name}
                        <br />
                        {state[0].shippingAddress.address}
                        <br />
                        {state[0].shippingAddress.city},{" "}
                        {state[0].shippingAddress.country}{" "}
                        {state[0].shippingAddress.zipCode}
                        <br />
                        <abbr title="Phone">Phone:</abbr>{" "}
                        {state[0].shippingAddress.phone}
                      </address>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6">
                      <address>
                        <strong>Payment Method:</strong>
                        <br />
                        Visa ending **** 1234
                        <br />
                        h.elaine@gmail.com
                        <br />
                      </address>
                    </div>
                    <div className="col-xs-6 text-right">
                      <address>
                        <strong>Order Date:</strong>
                        <br />
                        {state[0].date}
                      </address>
                    </div>
                  </div>
                  <h3>ORDER SUMMARY</h3>
                  <div className="row invoice_container">
                    <div className="col-sm-12">
                      <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                          <thead>
                            <tr className="cart_menu">
                              <td class="image">Image</td>
                              <td class="description">Item</td>
                              <td class="price">Price</td>
                              <td class="price">Qty</td>
                              <td class="total">Total</td>
                              <td></td>
                            </tr>
                          </thead>
                          <tbody>
                            {orderProductList?.map((product) => (
                              <tr>
                                <td className="cart_product">
                                  <a id={[product._id]}>
                                    <img
                                      src={product.productDetails.productimage}
                                      style={{ width: "100px" }}
                                      alt={product.productDetails.productName}
                                    />
                                  </a>
                                </td>
                                <td className="cart_description">
                                  <h3>{product.productDetails.productName}</h3>
                                  <p>ID: {product.productDetails._id}</p>
                                </td>
                                <td className="cart_price">
                                  <p>{product.productDetails.productprice}</p>
                                </td>
                                <td className="cart_quantity">
                                  <p>{product.quantity}</p>
                                </td>
                                <td className="cart_total">
                                  <p>
                                    $
                                    {getItemTotal(
                                      product.productDetails.productprice,
                                      product.quantity
                                    )}
                                  </p>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6">
                      <div className="total_area invoice_total_area">
                        <ul>
                          <li>
                            Cart Sub Total <span>${getCartTotal()}</span>
                          </li>
                          <li>
                            Tax <span>${state[0].tax}</span>
                          </li>
                          <li>
                            Shipping Cost <span>Free</span>
                          </li>
                          <li>
                            Total
                            <span>${state[0].totalAmount}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-4 cartTable">
              <div className="grid invoice">
                <div className="grid-body">
                  <h3>Thank you for the order,  {(state[0].billingAddress.name).split(" ")[0]} ! </h3>
                  <br/>
                  <button style={{backgroundColor: "#a8be40", color: "#fff"}} className="search-btn1">Print <i class="fa fa-print"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
