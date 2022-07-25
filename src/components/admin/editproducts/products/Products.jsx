import React, { useState } from "react";
import { getToken } from "../../../utls/Session";

export default function Products({ product }) {
  const currentProduct = product.products.userData.product;
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <section>
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li className="active">{currentProduct.productName}</li>
            </ol>
          </div>
          <div className="row">
            <div className="col-sm-12 padding-right">
              <div className="product-details">
                <div className="col-sm-5">
                  <div
                    className="product_details_card card-1"
                    style={{ textAlign: "center" }}
                  >
                    <img
                      src={currentProduct.productimage}
                      alt={currentProduct.productName}
                    />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="product-information">
                    <p>Web ID : {currentProduct._id}</p>
                    <p>Product Name :</p>
                    <div
                      contenteditable="true"
                      dangerouslySetInnerHTML={{
                        __html: currentProduct.productName,
                      }}
                    ></div>
                    <p>Product Description : </p>
                    <div
                      contenteditable="true"
                      rows="8"
                      dangerouslySetInnerHTML={{
                        __html: currentProduct.productdescription,
                      }}
                    ></div>
                    <p>Product Features : </p>
                    <div
                      contenteditable="true"
                      rows="8"
                      dangerouslySetInnerHTML={{
                        __html: currentProduct.productfeatures,
                      }}
                    ></div>
                    <p>Product Specifications : </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: currentProduct.productspecifications,
                      }}
                    ></div>
                  </div>
                  <div className="form-group col-md-12">
                    <button
                      className="btn btn-primary pull-right"
                      // onClick={onUpdateClick}
                    >
                      Update
                    </button>
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
