import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GetOrders } from "../../api/api";
import Spinner from "../common/spinner/Spinner";
import { getToken } from "../utls/Session";

export default function MyOrders() {
  const [orderList, setOrderList] = useState();

  const navigate = useNavigate();
  const userData = {
    authorizationToken: getToken(),
  };

  useEffect(() => {
    GetOrders(userData).then((data) => {
      setOrderList(data.body.orderList);
    });
  }, []);

  const onOrderDetailsClick = (event) => {
    navigate("/orderdetails", {
      state: {
        orderId: event.target.id,
      },
    });
  };

  if (orderList) {
    return (
      <div className="container">
        <div className="breadcrumbs">
          <ol className="breadcrumb">
            <li>
              <a>Home</a>
            </li>
            <li className="active">
              My Orders
            </li>
          </ol>
        </div>
        <ul>
          {orderList.map((order) => {
            return (
              <li>
                <div className="container cartTable">
                  <div className="col-xs-12 cartTable">
                    <div className="grid invoice">
                      <div className="grid-body">
                        <div
                          className="invoice-title"
                          style={{ padding: "10px" }}
                        >
                          <div className="row">
                            <br />
                            <div className="col-xs-2">
                              <div>
                                <span>Order Placed</span>
                                <p>{order.date}</p>
                              </div>
                            </div>
                            <div className="col-xs-2">
                              <div>
                                <span>Total</span>
                                <p>{order.totalAmount}</p>
                              </div>
                            </div>
                            <div className="col-xs-2">
                              <div>
                                <span>Shipped To</span>
                                <p>{order.shippingAddress.name}</p>
                              </div>
                            </div>
                            <div
                              className="col-xs-4"
                              style={{ float: "right" }}
                            >
                              <div>
                                <span
                                  onClick={onOrderDetailsClick}
                                  id={order._id}
                                >
                                  Order #{order._id}{" "}
                                </span>
                                <p>
                                  <a
                                    onClick={onOrderDetailsClick}
                                    id={order._id}
                                  >
                                    View Order details | Invoice
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row invoice_container">
                          <div className="col-sm-12">
                            <div className="table-responsive cart_info">
                              <table className="table table-condensed">
                                <tbody>
                                  {order.products?.map((product) => (
                                    <tr>
                                      <td className="cart_product">
                                        <a>
                                          <img
                                            src={
                                              product.productDetails
                                                .productimage
                                            }
                                            style={{ width: "100px" }}
                                            alt={
                                              product.productDetails.productName
                                            }
                                          />
                                        </a>
                                      </td>
                                      <td className="cart_description">
                                        <h3>
                                          {product.productDetails.productName}
                                        </h3>
                                        <p>ID: {product.productDetails._id}</p>
                                        <span>
                                          Quantity: {product.quantity}
                                        </span>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="breadcrumbs">
          <ol className="breadcrumb">
            <li>
              <a>Home</a>
            </li>
            <li className="active">
              <b>My Orders</b>
            </li>
          </ol>
        </div>
        <Spinner />
      </div>
    );
  }
}
