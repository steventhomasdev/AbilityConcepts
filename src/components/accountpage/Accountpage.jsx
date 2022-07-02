import React, { useEffect, useState } from "react";
import { GetAccountDetails, GetOrders, UpdateUserDetails } from "../../api/api";
import { getToken } from "../utls/Session";
import { useForm } from "react-hook-form";

export default function Accountpage({ isLogin, setIsProductListPage }) {
  const { register, getValues, setValue } = useForm();
  const [sucsess, setSucsess] = useState(false);
  const [orderList, setOrderList] = useState();
  const [orderProductList, setOrderProductList] = useState();
  const [loading, setLoading] = useState(false);

  const userData = {
    authorizationToken: getToken(),
  };

  const fetchAccountDetails = () => {
    if (isLogin)
      GetAccountDetails(userData).then((data) => {
        setValue("name", `${data.body.name}`);
        setValue("email", `${data.body.email}`);
        setValue("phone", `${data.body.phone}`);
        setValue("address", `${data.body.address}`);
        setValue("country", `${data.body.country}`);
        setValue("province", `${data.body.province}`);
        setValue("city", `${data.body.city}`);
        setValue("zipCode", `${data.body.postalCode}`);
      });

    GetOrders(userData)
      .then((data) => {
        setOrderList(data.body.orderList);

        let productList = [];
        data.body.orderList?.map((order) => {
          order.products?.map((product) => {
            productList.push(product);
            setOrderProductList(productList);
          });
        });
      })
      .then(setLoading(false));
  };

  useEffect(() => {
    setIsProductListPage(false);
    setLoading(true);
    fetchAccountDetails();
  }, [isLogin]);

  const onUpdateClick = () => {
    const AccountDetails = {
      authorizationToken: getToken(),
      name: getValues("name"),
      email: getValues("email"),
      phone: getValues("phone"),
      address: getValues("address"),
      country: getValues("country"),
      province: getValues("province"),
      city: getValues("city"),
      zipCode: getValues("zipCode"),
    };

    UpdateUserDetails(AccountDetails).then((data) => {
      setTimeout(() => {
        setSucsess(true);
      }, 2000);
    });

    setTimeout(() => {
      setSucsess(false);
    }, 5000);
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="left-sidebar">
                <div className="brands_products">
                  <h4 className="h-4">Recently Ordered</h4>
                  <ul className="user-list-item">
                    <table className="table table-condensed">
                      <thead>
                        <tr className="order_product">
                          <td className="image">Item</td>
                          <td className="total">Total</td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        {orderProductList?.map((product) => {
                          return (
                            <tr>
                              <td className="order_menu">
                                <a>{product.productDetails.productName}</a>
                              </td>
                              <td className="cart_total">
                                <p className="cart_total_price">
                                  ${product.productDetails.productprice}
                                </p>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-8 padding-right">
              <div className="features_items">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="contact-form">
                      <h2 className="profile_title text-center"> My Profile</h2>
                      <div
                        className="status alert alert-success"
                        style={
                          sucsess ? { display: "block" } : { display: "none" }
                        }
                      >
                        Updated
                      </div>
                      <form
                        className="contact-form row"
                        name="contact-form"
                        method="post"
                      >
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            required="required"
                            placeholder="Name"
                            {...register("name")}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            required="required"
                            placeholder="Email"
                            disabled
                            {...register("email")}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            required="required"
                            placeholder="Phone"
                            {...register("phone")}
                          />
                        </div>

                        <div className="form-group col-md-12"></div>
                      </form>
                      <h4 className="h42">Address </h4>
                      <form
                        id="main-contact-form"
                        className="contact-form row"
                        name="contact-form"
                        method="post"
                      >
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            required="required"
                            placeholder="Address"
                            {...register("address")}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            required="required"
                            placeholder="City"
                            {...register("city")}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            required="required"
                            placeholder="ZipCode"
                            {...register("zipCode")}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <select className="select3" {...register("country")}>
                            <option>-- Country --</option>
                            <option>United States</option>
                            <option>Canada</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <select className="select3" {...register("province")}>
                            <option>-- Province --</option>
                            <option>United States</option>
                            <option>Canada</option>
                          </select>
                        </div>

                        <div className="col-sm-12">
                          <button className="btn btn-primary add-address">
                            Add new address
                          </button>
                        </div>

                        <div className="form-group col-md-12">
                          <input
                            className="btn btn-primary pull-right"
                            defaultValue="Update"
                            onClick={onUpdateClick}
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
