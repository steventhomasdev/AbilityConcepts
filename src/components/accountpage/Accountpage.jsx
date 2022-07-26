import React, { useEffect, useState } from "react";
import { GetAccountDetails, GetOrders, UpdateUserDetails } from "../../api/api";
import { getToken } from "../utls/Session";
import { useForm } from "react-hook-form";
import Spinner from "../common/spinner/Spinner";

export default function Accountpage({ isLogin }) {
  const { register, getValues, setValue } = useForm();
  const [sucsess, setSucsess] = useState(false);
  const [orderProductList, setOrderProductList] = useState();

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

        let productList = [];
        data.body.orderList?.map((order) => {
          order.products?.map((product) => {
            productList.push(product);
          });
        });

        const UniqueId = [
          ...new Set(productList.map((data) => data.productId)),
        ];

        let UniqueproductList = [];
        UniqueId?.map((id) => {
          let flag = true;
          productList?.map((product) => {
            if (id === product.productId && flag) {
              UniqueproductList.push(product);
              flag = false;
            }
          });
        });

        setOrderProductList(UniqueproductList);
      })
  };

  useEffect(() => {
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

    UpdateUserDetails(AccountDetails).then(() => {
      setTimeout(() => {
        setSucsess(true);
      }, 1000);
    });

    setTimeout(() => {
      setSucsess(false);
    }, 20000);
  };

  if (orderProductList) {
    return (
      <div>
        <section>
          <div className="container">
            <div className="breadcrumbs">
              <ol className="breadcrumb">
                <li>
                  <a>Home</a>
                </li>
                <li className="active">My Account</li>
              </ol>
            </div>
            <div className="row" style={{ marginTop: "60px" }}>
              <div className="col-sm-4">
                <div>
                  <h4 className="h-4">Recently Ordered</h4>
                  <ul>
                    <table>
                      <tbody>
                        {orderProductList.slice(0, 5)?.map((product) => {
                          return (
                            <tr>
                              <td></td>
                              <td className="cart_total">
                                <a id={[product._id]}>
                                  <img
                                    src={product.productDetails.productimage}
                                    style={{ width: "100px" }}
                                    alt={product.productDetails.productName}
                                  />
                                </a>
                              </td>
                              <td className="order_menu">
                                <a>{product.productDetails.productName}</a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </ul>
                </div>
              </div>

              <div className="col-sm-8 padding-right">
                <div className="features_items">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="contact-form">
                        <h2 className="profile_title text-center">
                          {" "}
                          My Profile
                        </h2>
                        <div
                          className="status alert alert-success"
                          style={
                            sucsess ? { display: "block" } : { display: "none" }
                          }
                        >
                          Account sucsessfully updated, Please logout and relogin to see changes
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
                            <select
                              className="select3"
                              {...register("country")}
                            >
                              <option>-- Country --</option>
                              <option>United States</option>
                              <option>Canada</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <select
                              className="select3"
                              {...register("province")}
                            >
                              <option>-- Province --</option>
                              <option>United States</option>
                              <option>Canada</option>
                            </select>
                          </div>

                          {/* <div className="col-sm-12">
                            <button className="btn btn-primary add-address">
                              Add new address
                            </button>
                          </div> */}

                        </form>
                        <div className="form-group col-md-12">
                            <button
                              className="btn btn-primary pull-right"
                              onClick={onUpdateClick}
                            >Update</button>
                          </div>
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
  } else {
    return (
      <div className="container">
        <div className="breadcrumbs">
          <ol className="breadcrumb">
            <li>
              <a>Home</a>
            </li>
            <li className="active">My Account</li>
          </ol>
        </div>
        <Spinner />
      </div>
    );
  }
}
