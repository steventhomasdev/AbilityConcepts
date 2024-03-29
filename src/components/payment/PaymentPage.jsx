import React, { useEffect, useState } from "react";
import { OrderTableEntry, RemoveItemsFromCart } from "../../api/api";
import { getToken } from "../utls/Session";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "../common/spinner/Spinner";

export default function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orderProductList, setOrderProductList] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    let productList = [];
    state.products.cartItems?.map((product) => {
      productList.push(product);
      setOrderProductList(productList);
    });

    const tax = {
      productDetails: {
        productName: "Tax",
        productprice: String(calculateTax()),
      },
      quantity: 1,
    };
    productList.push(tax);
    setOrderProductList(productList);

    const shipping = {
      productDetails: {
        productName: "Shipping",
        productprice: String(0),
      },
      quantity: 1,
    };
    productList.push(shipping);
    setOrderProductList(productList);
  }, []);

  const makePayment = () => {
    setLoading(true);
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    let userData = {};

    userData = {
      authorizationToken: getToken(),
      products: state.products.cartItems,
      tax: calculateTax(),
      amount: Number(getCartTotal().replace(/\,/g, "")) + calculateTax(),
      shippingAddress: state.shippingAddress.shippingAddress,
      billingAddress: state.billingAddress.billingAddress,
      date: date,
      temp: true,
    };

    OrderTableEntry(userData);

    console.log(userData.products);

    return fetch(
      "https://uuelbqsi64.execute-api.us-east-2.amazonaws.com/Products_Live/payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authorizationToken: getToken(),
          productList: orderProductList,
        }),
      }
    )
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        setLoading(false);
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  const getItemTotal = (productprice, quantity) => {
    const total = Number(productprice.replace(/\,/g, "")) * Number(quantity);
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getCartTotal = () => {
    const cartItems = state.products.cartItems;
    let totalPrice = 0;
    for (let i in cartItems) {
      totalPrice += Number(
        getItemTotal(
          cartItems[i].productDetails.productprice,
          cartItems[i].quantity
        ).replace(/\,/g, "")
      );
    }
    return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // const calculateTax = () => {
  //   const cartItems = state.products.cartItems;
  //   let totalTax = 0;
  //   for (let i in cartItems) {
  //     totalTax += Number(
  //       getItemTotal(
  //         cartItems[i].productDetails.productTax,
  //         cartItems[i].quantity
  //       ).replace(/\,/g, "")
  //     );
  //     let tax = ((cartItems[i].productDetails.productTax * cartItems[i].productDetails.productprice)/100)*cartItems[i].quantity
  //     console.log(Math.ceil(tax))
  //   }

  //   return totalTax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  const calculateTax = () => {
    const cartItems = state.products.cartItems;
    let totalTax = 0;
    for (let i in cartItems) {
      let tax =
        ((cartItems[i].productDetails.productTax *
          cartItems[i].productDetails.productprice) /
          100) *
        cartItems[i].quantity;
      totalTax += Math.ceil(tax);
    }

    return totalTax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <section id="cart_items">
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Cart</a>
              </li>
              <li className="active">Review & Payment</li>
            </ol>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <section id="do_action">
              <div className="container">
                <div className="row">
                  <div className="col-sm-7 cartTable">
                    <div className="table-responsive cart_info">
                      <table className="table table-condensed">
                        <thead>
                          <tr className="cart_menu">
                            <td className="image">Item</td>
                            <td className="description"></td>
                            <td className="total">Total</td>
                            <td></td>
                          </tr>
                        </thead>
                        <tbody>
                          {state.products.cartItems?.map((product) => (
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
                                <h4>
                                  <a id={[product._id]}>
                                    {product.productDetails.productName}
                                  </a>
                                </h4>
                                <p>
                                  Price: ${product.productDetails.productprice}
                                </p>
                                <span>Quantity: </span>
                                <span>{product.quantity}</span>
                              </td>
                              <td className="cart_total">
                                <p className="cart_total_price">
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
                  <div className="col-sm-5">
                    <div className="total_area">
                      <ul>
                        <li>
                          Cart Sub Total <span>${getCartTotal()}</span>
                        </li>
                        <li>
                          Tax <span>${calculateTax()}</span>
                        </li>
                        <li>
                          Shipping Cost <span>Free</span>
                        </li>
                        <li>
                          Total
                          <span>
                            $
                            {(
                              Number(getCartTotal().replace(/\,/g, "")) +
                              Number(calculateTax().replace(/\,/g, ""))
                            )
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
      {loading ? undefined : (
        <div className="container">
          <div className="row">
            <div className="breadcrumbs ">
              <div className="col-md-9"></div>
              <div className="col-md-3">
                <ol className="breadcrumb bar">
                  <li>
                    {/* <StripeCheckout
                      stripeKey="pk_test_51LDrdfES8E02HbRiDhuwkhsiNvf0CuzdpHGEIfBpoUJCqU9S0AOaiHDvsqQF0vrmSckCDTfrAR7m0EtOHQdpzReG00KbA4mNwe"
                      token={makePayment}
                      name="Payment"
                      amount={
                        (Number(getCartTotal().replace(/\,/g, "")) +
                          calculateTax()) *
                        100
                      }
                    >
                    </StripeCheckout> */}
                    <a onClick={makePayment} className="btn check-out-bar">
                      Pay Now
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
