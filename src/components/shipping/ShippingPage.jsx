import React, { useEffect } from "react";

export default function ShippingPage() {
  
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
              <li class="active">Shipping and Billing Address</li>
            </ol>
          </div>

          <div class="shopper-informations">
            <div class="row">
              <div class="col-sm-4">
                <div class="shopper-info">
                  <p>Shipping address</p>
                  <form>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Street" />
                    <input type="Text" placeholder="Address line 1" />
                    <input type="Text" placeholder="Address line 2" />
                    <select class="mb-10">
                      <option>-- Country --</option>
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                    <select class="mb-10">
                      <option>-- State / Province / Region --</option>
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                    <input type="Text" placeholder="Landmark" />
                    <input type="tel" placeholder="Contact number" />
                  </form>
                </div>
              </div>
              <div class="col-sm-8 clearfix">
                <div class="bill-to">
                  <p>Bill To</p>
                  <label class="checkout2">
                    <input type="checkbox"></input>Same as Shipping address
                  </label>
                  <div class="form-one">
                    <form>
                      <input type="text" placeholder="Company Name" />
                      <input type="text" placeholder="Email*" />
                      <input type="text" placeholder="Title" />
                      <input type="text" placeholder="First Name *" />
                      <input type="text" placeholder="Last Name *" />
                      <input type="text" placeholder="Address 1 *" />
                      <input type="text" placeholder="Address 2" />
                    </form>
                  </div>
                  <div class="form-two">
                    <form>
                      <select class="mb-10">
                        <option>-- Country --</option>
                        <option>United States</option>
                        <option>Canada</option>
                      </select>
                      <br />
                      <select class="mb-10">
                        <option>-- State / Province / Region --</option>
                        <option>United States</option>
                        <option>Canada</option>
                      </select>
                      <input type="text" placeholder="Phone *" />
                      <input type="text" placeholder="Zip / Postal Code *" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
                  <a class="btn check-out-bar">Continue</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
