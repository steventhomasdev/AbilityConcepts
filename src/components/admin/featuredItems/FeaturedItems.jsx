import React, { useState, useEffect } from "react";
import { GetFeturedProducts, GetOrders } from "../../../api/api";
import Spinner from "../../common/spinner/Spinner";
import { getToken } from "../../utls/Session";

export default function FeaturedItems() {
  const [featuredItems, setFeaturedItems] = useState();

  const userData = {
    authorizationToken: getToken(),
  };

  useEffect(() => {
    GetFeturedProducts(userData).then((data) => {
      setFeaturedItems(data.body);
    });
  }, []);

  const onOrderDetailsClick = (event) => {};

  if (featuredItems) {
    return (
      <div className="container">
        <div className="breadcrumbs">
          <ol className="breadcrumb">
            <li>
              <a>Home</a>
            </li>
            <li className="active">Featured Items</li>
          </ol>
        </div>
        <ul>
          {featuredItems.map((item) => {
            return (
              <li>
                <div className="container cartTable">
                  <div className="col-xs-12 cartTable">
                    <div className="grid invoice">
                      <div className="grid-body">
                        <div className="row invoice_container">
                          <div className="col-sm-12">
                            <div className="table-responsive cart_info">
                              <table className="table table-condensed">
                                <tbody>
                                  <tr>
                                    <td className="cart_product">
                                      <a>
                                        <img
                                          src={item.productimage}
                                          style={{ width: "100px" }}
                                          alt={item.productName}
                                        />
                                      </a>
                                    </td>
                                    <td className="cart_description">
                                      <h3>{item.productName}</h3>
                                      <p>ID: {item._id}</p>
                                      <p>Price: {item.productprice}</p>
                                    </td>
                                    <td className="cart_description">
                                      <button
                                        className="btn col-sm-8"
                                        style={{
                                          background: "red",
                                          color: "white",
                                        }}
                                        // onClick={onRemoveItemClick}
                                      >
                                        Remove Item
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
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
            <li className="active">
              <b>My Orders</b>
            </li>
          </ol>
        </div>
        <Spinner />
      </div>
    );
  }
}
