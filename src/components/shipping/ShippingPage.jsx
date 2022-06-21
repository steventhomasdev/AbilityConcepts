import React, { useEffect,useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GetAccountDetails } from "../../api/api";
import { getToken } from "../utls/Session";


export default function ShippingPage({isLogin}) {
  const { state } = useLocation();
  const { register, getValues } = useForm();
  const [isChecked, setIsCheked] = useState(false);
  const [accountDetails, setAccountDetails] = useState({})
  const navigate = useNavigate();

  
  const userData = {
  authorizationToken: getToken(),
  };

  const fetchAccountDetails = () => {
    if(isLogin)  
    GetAccountDetails(userData).then((data) =>
      setAccountDetails(data.body)
    );
  };
  
  useEffect(() => {
    fetchAccountDetails();
  }, [isLogin])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = () => {
    isChecked ? setIsCheked(false) : setIsCheked(true)
  }

  const onContinueClick = () => {
    // const userData = getValues()
    const cartItems = state.products.userData.cartItems;
    
    navigate("/payment", {
      state: {
        products: { cartItems }
      }
    })

  };

  return (
    <div>
      <section id="cart_items">
        <form>
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
                  <br />
                    <input value={accountDetails.name} name="name" type="text" placeholder="Name *" required {...register("name")}/>
                    <input value={accountDetails.email} name="email" type="Text" placeholder="Email" {...register("email")}/>
                    <input value={accountDetails.phone} name="phone" type="number" placeholder="Phone *" required {...register("phone")}/>
                    <input
                      value={accountDetails.address}
                      name="address"
                      type="Text"
                      placeholder="Address*"
                      required
                      {...register("address")}
                    />
                    <select value={accountDetails.country} name="country" class="mb-10" required {...register("country")}>
                      <option>-- Country -- *</option>
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                    <select value={accountDetails.province} name="province" class="mb-10" required {...register("province")}>
                      <option>-- Province -- *</option>
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                    <input value={accountDetails.city} name="city" type="text" placeholder="City *" required {...register("city")}/>
                    <input
                        value={accountDetails.postalCode}
                        type="text"
                        placeholder="Zip / Postal Code *"
                        required
                        {...register("zipCode")}
                      />
                </div>
              </div>
              <div class="col-sm-8 clearfix">
                <div class="bill-to">
                  <p>Bill To</p>
                  <br />
                  <label class="checkout2">
                    <input type="checkbox" onChange={handleChange}></input>Same as Shipping address
                  </label>
                    <div class="form-one">
                      <input value={isChecked ? accountDetails.name === "" ? getValues("name"): accountDetails.name : ""} type="text" placeholder="Name *" required {...register("billName")}/>
                      <input value={isChecked ? accountDetails.email === "" ? getValues("email"): accountDetails.email : ""} type="text" placeholder="Email *" required {...register("billEmail")}/>
                      <input value={isChecked ? accountDetails.address === "" ? getValues("address"): accountDetails.address : ""} type="text" placeholder="Address *" required {...register("billAddress")}/>
                      <select value={isChecked ? accountDetails.country === "" ? getValues("country"): accountDetails.country : undefined} class="mb-10" required {...register("billCountry")}>
                        <option>-- Country -- *</option>
                        <option>United States</option>
                        <option>Canada</option>
                      </select>
                      <br />
                      <select value={isChecked ? accountDetails.province === "" ? getValues("province"): accountDetails.province : undefined} class="mb-10" required {...register("billProvince")}>
                        <option>-- Province -- *</option>
                        <option>United States</option>
                        <option>Canada</option>
                      </select>
                      <input value={isChecked ? accountDetails.city === "" ? getValues("city"): accountDetails.city : ""} name="city" type="text" placeholder="City *" required {...register("billCity")}/>
                    </div>
                    <div class="form-two">
                      <input value={isChecked ? accountDetails.phone === "" ? getValues("phone"): accountDetails.phone : ""} type="text" placeholder="Phone *" required {...register("billPhone")}/>
                      <input
                      value={isChecked ? accountDetails.postalCode === "" ? getValues("zipCode"): accountDetails.postalCode : ""}
                        type="text"
                        placeholder="Zip / Postal Code *"
                        required
                        {...register("billZipCode")}
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
        <div class="row">
          <div class="breadcrumbs ">
            <div class="col-sm-9"></div>
            <div class="col-sm-3">
              <ol class="breadcrumb bar">
                <li>
                  <button class="btn check-out-bar" onClick={onContinueClick}>Continue</button>
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
