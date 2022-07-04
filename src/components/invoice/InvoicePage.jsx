import React, { useState, useEffect, forwardRef, useRef } from "react";
import "./style/Style.css";
import { useLocation } from "react-router-dom";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { GetOrders, OrderTableEntry } from "../../api/api";
import { getToken } from "../utls/Session";

const Invoice = forwardRef((props, ref) => {

  const { state } = useLocation();
  let params = (new URL(document.location)).searchParams;
  const [orderProductList, setOrderProductList] = useState();
  const [order, setOrder] = useState();

  
  const userData = {
    authorizationToken: getToken(),
    invoice: true,
    session_id: params.get('session_id')
  };
  
  useEffect(() => {

    GetOrders(userData)
    .then((data) => {
      setOrder(data.body.orderList[0]);

      console.log(data.body.orderList[0].mysession.details.billing_details.email)

      let productList = [];

      data.body.orderList?.map((order) => {
        order.products?.map((product) => {
          productList.push(product);
          setOrderProductList(productList);
        });
      });
    })

    OrderTableEntry(userData)

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

  if(order && orderProductList){
    return (
      <div ref={ref} className="col-xs-12 cartTable">
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
                    <span className="small">Order #{order._id}</span>
                  </h2>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-xs-6">
              <strong>Billed To:</strong>
                <address>
                  <br />
                  {order.billingAddress.name}
                  <br />
                  {order.billingAddress.address}
                  <br />
                  {order.billingAddress.city},{" "}
                  {order.billingAddress.country}{" "}
                  {order.billingAddress.zipCode}
                  <br />
                  <abbr title="Phone">Phone:</abbr>{" "}
                  {order.billingAddress.phone}
                </address>
              </div>
              <div className="col-xs-6 text-right">
              <strong>Shipped To:</strong>
                <address>
                  <br />
                  {order.shippingAddress.name}
                  <br />
                  {order.shippingAddress.address}
                  <br />
                  {order.shippingAddress.city},{" "}
                  {order.shippingAddress.country}{" "}
                  {order.shippingAddress.zipCode}
                  <br />
                  <abbr title="Phone">Phone:</abbr>{" "}
                  {order.shippingAddress.phone}
                </address>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
              <strong>Payment Method:</strong>
                <address style={{textTransform: "lowercase"}}>
                  <br />
                  {order.mysession.details.payment_method_details.card.brand} ending **** {order.mysession.details.payment_method_details.card.last4}
                  <br />
                  {order.mysession.details.billing_details.email}
                  <br />
                </address>
              </div>
              <div className="col-xs-6 text-right">
                <address>
                  <strong>Order Date:</strong>
                  <br />
                  {order.date}
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
                        <td className="image">Image</td>
                        <td className="description">Item</td>
                        <td className="price">Price</td>
                        <td className="price">Qty</td>
                        <td className="total">Total</td>
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
              <div className="col-sm-4" style={{float: "right"}}>
                <div className="total_area invoice_total_area">
                  <ul>
                    <li>
                      Sub Total : <span>${getCartTotal()}</span>
                    </li>
                    <li>
                      Tax : <span>${order.tax}</span>
                    </li>
                    <li>
                      Shipping Cost : <span>Free</span>
                    </li>
                    <li>
                      Total :
                      <span>${order.totalAmount}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default function InvoicePage({setCartCount}) {
  const { state } = useLocation();
  const ref = useRef();

  useEffect(() => {
    setCartCount(0);
  })

  return (
    <div className="row">
      <section id="cart_items">
        <div className="container">
          <div className="container cartTable">
            <div className="col-xs-8"></div>
            <div className="col-xs-4">
              <ReactToPrint content={() => ref.current}>
                <PrintContextConsumer>
                  {({ handlePrint }) => (
                    <button
                      style={{ backgroundColor: "#a8be40", color: "#fff", float: "right", marginRight: "0px", marginBottom: "10px"  }}
                      className="search-btn1"
                      onClick={handlePrint}
                    >
                      Print <i className="fa fa-print"></i>
                    </button>
                  )}
                </PrintContextConsumer>
              </ReactToPrint>
            </div>
            <Invoice ref={ref} />
          </div>
        </div>
      </section>
    </div>
  );
}
