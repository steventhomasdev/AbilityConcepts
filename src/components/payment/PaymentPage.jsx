import React, { useEffect } from "react";

export default function PaymentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                        Cart Sub Total <span>$59</span>
                      </li>
                      <li>
                        Eco Tax <span>$2</span>
                      </li>
                      <li>
                        Shipping Cost <span>Free</span>
                      </li>
                      <li>
                        Total <span>$61</span>
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
