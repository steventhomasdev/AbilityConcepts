import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GetAccountDetails } from "../../api/api";
import { getToken } from "../utls/Session";

export default function ShippingPage({ isLogin }) {
  const { state } = useLocation();
  const { register, getValues, setValue } = useForm();
  const [isChecked, setIsCheked] = useState(false);
  const [accountDetails, setAccountDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userData = {
    authorizationToken: getToken(),
  };

  const fetchAccountDetails = () => {
    if (isLogin)
      GetAccountDetails(userData).then((data) => {
        setAccountDetails(data.body);
        setValue("billname", `${data.body.name}`);
        setValue("billemail", `${data.body.email}`);
        setValue("billphone", `${data.body.phone}`);
        setValue("billaddress", `${data.body.address}`);
        setValue("billcountry", `${data.body.country}`);
        setValue("billprovince", `${data.body.province}`);
        setValue("billcity", `${data.body.city}`);
        setValue("billzipCode", `${data.body.postalCode}`);
      });
  };

  useEffect(() => {
    fetchAccountDetails();
  }, [isLogin]);

  const handleChange = () => {

    if(isChecked) {
      setIsCheked(false)
    }else{
      setIsCheked(true);
      setValue("name", `${accountDetails.name}`);
      setValue("email", `${accountDetails.email}`);
      setValue("phone", `${accountDetails.phone}`);
      setValue("address", `${accountDetails.address}`);
      setValue("country", `${accountDetails.country}`);
      setValue("province", `${accountDetails.province}`);
      setValue("city", `${accountDetails.city}`);
      setValue("zipCode", `${accountDetails.postalCode}`);
    } 
  };

  const onContinueClick = () => {
    const shippingAddress = {
      name : getValues("name"),
      email : getValues("email"),
      phone : getValues("phone"),
      address : getValues("address"),
      country : getValues("country"),
      province : getValues("province"),
      city : getValues("city"),
      zipCode : getValues("zipCode"),
    }

    const billingAddress = {
      name : getValues("billname"),
      email : getValues("billemail"),
      phone : getValues("billphone"),
      address : getValues("billaddress"),
      country : getValues("billcountry"),
      province : getValues("billprovince"),
      city : getValues("billcity"),
      zipCode : getValues("billzipCode"),
    }
    const cartItems = state.products.userData.cartItems;

    navigate("/payment", {
      state: {
        products: { cartItems },
        shippingAddress : {shippingAddress},
        billingAddress: { billingAddress }
      },
    });
  };

  return (
    <div>
      <section id="cart_items">
        <form>
          <div className="container">
            <div className="breadcrumbs">
              <ol className="breadcrumb">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Cart</a>
                </li>
                <li className="active">Shipping and Billing Address</li>
              </ol>
            </div>

            <div className="shopper-informations">
              <div className="row">
                <div className="col-sm-4">
                  <div className="shopper-info">
                    <p>Billing address</p>
                    <br />
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      {...register("billname")}
                    />
                    <input
                      type="Text"
                      placeholder="Email"
                      {...register("billemail")}
                    />
                    <input
                      type="number"
                      placeholder="Phone *"
                      required
                      {...register("billphone")}
                    />
                    <input
                      type="Text"
                      placeholder="Address*"
                      required
                      {...register("billaddress")}
                    />
                    <select
                      className="mb-10"
                      required
                      {...register("billcountry")}
                    >
                      <option>-- Country -- *</option>
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                    <select
                      className="mb-10"
                      required
                      {...register("billprovince")}
                    >
                      <option>-- Province -- *</option>
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                    <input
                      type="text"
                      placeholder="City *"
                      required
                      {...register("billcity")}
                    />
                    <input
                      type="text"
                      placeholder="Zip / Postal Code *"
                      required
                      {...register("billzipCode")}
                    />
                  </div>
                </div>
                <div className="col-sm-8 clearfix">
                  <div className="bill-to">
                    <p>Ship To</p>
                    <br />
                    <label className="checkout2">
                      <input type="checkbox" onChange={handleChange}></input>
                      Same as Billing address
                    </label>
                    <div className="form-one">
                      <input
                        type="text"
                        placeholder="Name *"
                        required
                        {...register("name")}
                      />
                      <input
                        type="text"
                        placeholder="Email *"
                        required
                        {...register("email")}
                      />
                      <input
                        type="text"
                        placeholder="Address *"
                        required
                        {...register("address")}
                      />
                      <select
                        className="mb-10"
                        required
                        {...register("country")}
                      >
                        <option>-- Country -- *</option>
                        <option>United States</option>
                        <option>Canada</option>
                      </select>
                      <br />
                      <select
                        className="mb-10"
                        required
                        {...register("province")}
                      >
                        <option>-- Province -- *</option>
                        <option>United States</option>
                        <option>Canada</option>
                      </select>
                      <input
                        name="city"
                        type="text"
                        placeholder="City *"
                        required
                        {...register("city")}
                      />
                    </div>
                    <div className="form-two">
                      <input
                        type="text"
                        placeholder="Phone *"
                        required
                        {...register("phone")}
                      />
                      <input
                        type="text"
                        placeholder="Zip / Postal Code *"
                        required
                        {...register("zipCode")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="breadcrumbs ">
                <div className="col-sm-9"></div>
                <div className="col-sm-3">
                  <ol className="breadcrumb bar">
                    <li>
                      <button
                        className="btn check-out-bar"
                        onClick={onContinueClick}
                      >
                        Continue
                      </button>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
