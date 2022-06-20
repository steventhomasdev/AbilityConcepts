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

  if (cartItems !== undefined && Object.keys(cartItems).length > 0) {
    return (
      <div>
        <section id="cart_items">
          <div class="container">
            <div class="breadcrumbs">
              <ol class="breadcrumb">
                <li>
                  <a>Home</a>
                </li>
                <li class="active">
                  <b>Cart</b>
                </li>
              </ol>
            </div>
            <div class="table-responsive cart_info">
              <table class="table table-condensed">
                <thead>
                  <tr class="cart_menu">
                    <td class="image">Item</td>
                    <td class="description"></td>
                    <td class="price">Price</td>
                    <td class="quantity">Quantity</td>
                    <td class="total">Total</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((product) => (
                    <tr>
                      <td class="cart_product">
                        <a onClick={onProductClick} id={[product._id]}>
                          <img
                            src={product.productDetails.productimage}
                            style={{ width: "100px" }}
                            alt={product.productDetails.productName}
                          />
                        </a>
                      </td>
                      <td class="cart_description">
                        <h4>
                          <a onClick={onProductClick} id={[product._id]}>
                            {product.productDetails.productName}
                          </a>
                        </h4>
                        <p>Web ID: {product.productDetails._id}</p>
                      </td>
                      <td class="cart_price">
                        <p>${product.productDetails.productprice}</p>
                      </td>
                      <td class="cart_quantity">
                        <div class="cart_quantity_button">
                          <input
                            class="cart_quantity_input"
                            type="text"
                            name="quantity"
                            value={product.quantity}
                            autocomplete="off"
                            size="2"
                            readonly
                          />
                        </div>
                      </td>
                      <td class="cart_total">
                        <p class="cart_total_price">
                          $
                          {getItemTotal(
                            product.productDetails.productprice,
                            product.quantity
                          )}
                        </p>
                      </td>
                      <td class="cart_delete">
                        <a
                          class="cart_quantity_delete"
                          onClick={OnRemoveButtonClick}
                          id={[product.productId]}
                        >
                          <i class="fa fa-times"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tr>
                  <td colspan="3">&nbsp;</td>
                  <td colspan="3">
                      <div class="total_area">
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
              </table>
            </div>
          </div>
        </section>

        <div class="container">
          <div class="row">
            <div class="breadcrumbs ">
              <div class="col-sm-9"></div>
              <div class="col-sm-3">
                <ol class="breadcrumb bar">
                  <li>
                    <a class="btn check-out-bar">Check Out</a>
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
