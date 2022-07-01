import React from "react";

export default function Accountpage() {
  return (
    <div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="left-sidebar">
                <div class="brands_products">
                  <p class="user-prev">
                    <small>Hello,</small>
                    <span>John</span>
                  </p>
                  <h4 class="h-4">My Order</h4>
                  <ul class="user-list-item">
                    <li>
                      <a href="">Order item</a>
                    </li>
                    <li>
                      <a href="">Order item</a>
                    </li>
                    <li>
                      <a href="">Order item</a>
                    </li>
                    <li>
                      <a href="">Order item</a>
                    </li>
                  </ul>

                  <h4 class="h-4">My wishlist</h4>
                  <ul class="user-list-item">
                    <li>
                      <a href="">wishlist item</a>
                    </li>
                    <li>
                      <a href="">wishlist item</a>
                    </li>
                    <li>
                      <a href="">wishlist item</a>
                    </li>
                    <li>
                      <a href="">wishlist item</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-sm-9 padding-right">
              <div class="features_items">
                <div class="row">
                  <div class="col-sm-10">
                    <div class="contact-form">
                      <h2 class="profile_title text-center"> My Profile</h2>
                      <div
                        class="status alert alert-success"
                      ></div>
                      <form
                        id="main-contact-form"
                        class="contact-form row"
                        name="contact-form"
                        method="post"
                      >
                        <div class="form-group col-md-6">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            required="required"
                            placeholder="Name"
                            value="John"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            required="required"
                            placeholder="Email"
                            value="john@gmail.com"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <input
                            type="text"
                            name="Phone"
                            class="form-control"
                            required="required"
                            placeholder="Subject"
                            value="1234567890"
                          />
                        </div>

                        <div class="form-group col-md-12">
                          <input
                            type="submit"
                            name="submit"
                            class="btn btn-primary pull-right"
                            value="Update"
                          />
                        </div>
                      </form>
                      <h4 class="h42">Address </h4>
                      <span>
                        <label for="" class="checkout2">
                          <input type="checkbox" />
                          Mark as default
                        </label>
                      </span>
                      <form
                        id="main-contact-form"
                        class="contact-form row"
                        name="contact-form"
                        method="post"
                      >
                        <div class="form-group col-md-6">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            required="required"
                            placeholder="Name"
                            value="Address line 1"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            required="required"
                            placeholder="Email"
                            value="Addressline 2"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <input
                            type="text"
                            name="Phone"
                            class="form-control"
                            required="required"
                            placeholder="Subject"
                            value="Landmark"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <select class="select3">
                            <option>-- Country --</option>
                            <option>United States</option>
                            <option>Bangladesh</option>
                            <option>UK</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>Ucrane</option>
                            <option>Canada</option>
                            <option>Dubai</option>
                          </select>
                        </div>
                        <div class="form-group col-md-6">
                          <select class="select3">
                            <option>-- State / Province / Region --</option>
                            <option>United States</option>
                            <option>Bangladesh</option>
                            <option>UK</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>Ucrane</option>
                            <option>Canada</option>
                            <option>Dubai</option>
                          </select>
                        </div>

                        <div class="col-sm-12">
                          <button class="btn btn-primary add-address">
                            Add new address
                          </button>
                        </div>

                        <div class="form-group col-md-12">
                          <input
                            type="submit"
                            name="submit"
                            class="btn btn-primary pull-right"
                            value="Update"
                          />
                        </div>
                      </form>
                    </div>
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
