import React, { useState, useEffect } from "react";
import { GetCartItems, RemoveItemsFromCart } from "../../../api/api";
import Advertisement from "../../common/advertisement/Advertisement";
import { getToken } from "../../utls/Session";
import { useNavigate, useLocation } from "react-router-dom";

export default function Cart({ isLogin, setCartCount }) {
  const [cartItems, setCartItems] = useState();
  const [cartItemRefesh, setCartItemRefresh] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    setCartItemRefresh(false);
    if (isLogin) {
      let userData = {};
      userData = {
        authorizationToken: getToken(),
      };

      GetCartItems(userData).then((data) => setCartItems(data.body.cart));
    }
  }, [cartItemRefesh]);

  const OnRemoveButtonClick = (event) => {
    let userData = {};
    userData = {
      authorizationToken: getToken(),
      productId: event.currentTarget.id,
    };

    RemoveItemsFromCart(userData).then((data) =>
      setCartCount(data.body.quantity)
    );
    setTimeout(() => {
      setCartItemRefresh(true);
    }, 1000);
  };

  const getItemTotal = (productprice, quantity) => {
    const total = Number(productprice.replace(/\,/g, "")) * Number(quantity);
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getCartTotal = () => {
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

  const calculateTax = () => {
    return 2;
  };

  const onProductClick = (event) => {
    let userData = {};

    for (let i in cartItems) {
      if (cartItems[i]._id === event.currentTarget.id) {
        userData = {
          product: cartItems[i].productDetails,
        };
        break;
      }
    }

    navigate("/productdetail", {
      state: {
        products: { userData },
      },
    });
  };

  const onCheckOutClick = () => {
    const userData = {
      cartItems : cartItems,
    };

    navigate("/shipping", {
      state: {
        products: { userData },
      },
    });
  };

  if (cartItems !== undefined && Object.keys(cartItems).length > 0) {
    return (
      <div>
        <section id="cart_items">
          <div className="container">
            <div className="breadcrumbs">
              <ol className="breadcrumb">
                <li>
                  <a>Home</a>
                </li>
                <li className="active">
                  <b>Cart</b>
                </li>
              </ol>
            </div>
            <div className="table-responsive cart_info">
              <table className="table table-condensed">
                <thead>
                  <tr className="cart_menu">
                    <td className="image">Item</td>
                    <td className="description"></td>
                    <td className="price">Price</td>
                    <td className="quantity">Quantity</td>
                    <td className="total">Total</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((product) => (
                    <tr>
                      <td className="cart_product">
                        <a onClick={onProductClick} id={[product._id]}>
                          <img
                            src={product.productDetails.productimage}
                            style={{ width: "100px" }}
                            alt={product.productDetails.productName}
                          />
                        </a>
                      </td>
                      <td className="cart_description">
                        <h4>
                          <a onClick={onProductClick} id={[product._id]}>
                            {product.productDetails.productName}
                          </a>
                        </h4>
                        <p>Web ID: {product.productDetails._id}</p>
                      </td>
                      <td className="cart_price">
                        <p>${product.productDetails.productprice}</p>
                      </td>
                      <td className="cart_quantity">
                        <div className="cart_quantity_button">
                          <input
                            className="cart_quantity_input"
                            type="text"
                            name="quantity"
                            value={product.quantity}
                            autoComplete="off"
                            size="2"
                            readOnly
                          />
                        </div>
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
                      <td className="cart_delete">
                        <a
                          className="cart_quantity_delete"
                          onClick={OnRemoveButtonClick}
                          id={[product.productId]}
                        >
                          <i className="fa fa-times"></i>
                        </a>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td colSpan="3">&nbsp;</td>
                    <td colSpan="3">
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
                                calculateTax()
                              )
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="breadcrumbs ">
              <div className="col-sm-9"></div>
              <div className="col-sm-3">
                <ol className="breadcrumb bar">
                  <li>
                    <a className="btn check-out-bar" onClick={onCheckOutClick}>
                      Check Out
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Advertisement />
        <div>No items found</div>
      </>
    );
  }
}
