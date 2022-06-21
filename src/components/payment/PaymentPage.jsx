import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PaymentPage() {
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const calculateTax = () => {
    return 2;
  };

  return (
    <div>
      <section id="cart_items">
        <div class="container">
          <div class="breadcrumbs">
            <ol class="breadcrumb">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Cart</a>
              </li>
              <li class="active">Review & Payment</li>
            </ol>
          </div>
          <section id="do_action">
            <div class="container">
              <div class="row">
                <div class="col-sm-5">
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
                </div>
                <div class="col-sm-2"></div>
                <div class="col-sm-5">
                  <div class="card-details shopper-info">
                    <p>Card details</p>
                    <form>
                      <input type="text" placeholder="Name on card" />
                      <input type="text" placeholder="Card number" />
                      <input type="Text" placeholder="Valid through" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div class="container">
        <div class="row">
          <div class="breadcrumbs ">
            <div class="col-sm-9"></div>
            <div class="col-sm-3">
              <ol class="breadcrumb bar">
                <li>
                  <a class="btn check-out-bar">Pay Now</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
