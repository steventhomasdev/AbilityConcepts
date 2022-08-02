import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  AddProduct,
  RemoveProducts,
  UpdateProducts,
  UploadImageInS3,
} from "../../../../api/api";
import Spinner from "../../../common/spinner/Spinner";
import { getToken } from "../../../utls/Session";

export default function Products({ product }) {
  const currentProduct = product.products.userData.product;
  const { register, getValues, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [sucsess, setSucsess] = useState(false);
  const [postImage, setPostImage] = useState();
  const [newImage, setNewImage] = useState(false);

  const UpdateDescription = () => {
    const productdescription = new DOMParser().parseFromString(
      currentProduct.productdescription,
      "text/xml"
    );

    const productfeatures = new DOMParser().parseFromString(
      currentProduct.productfeatures,
      "text/xml"
    );

    const productspecifications = new DOMParser().parseFromString(
      currentProduct.productspecifications,
      "text/xml"
    );

    setValue("productname", `${currentProduct.productName}`);
    setValue("category", `${currentProduct.productCat}`);
    setValue("tax", `${currentProduct.productTax}`);
    setValue("price", `${currentProduct.productprice}`);
    setValue(
      "description",
      `${productdescription.firstChild.innerHTML.replaceAll("<br/>", "\n")}`
    );
    setValue(
      "Features",
      `${productfeatures.firstChild.innerHTML
        .replaceAll("<li>", "")
        .replaceAll("</li>", "\n")}`
    );
    setValue(
      "Specifications",
      `${productspecifications.firstChild.innerHTML
        .replaceAll("<li>", "")
        .replaceAll("</li>", "\n")}`
    );
    setPostImage(currentProduct.productimage);
  };

  useEffect(() => {
    UpdateDescription();
  }, []);

  const onRemoveItemClick = () => {
    setLoading(true);
    const product = {
      authorizationToken: getToken(),
      productId: currentProduct._id,
      removeItem: true,
    };
    RemoveProducts(product).then(() => {
      setSucsess(true);
      setLoading(false);
      setTimeout(() => {
        setSucsess(false);
      }, 3000);
    });
  };

  const onUpdateClick = () => {
    if (postImage && newImage) {
      setLoading(true);
      const userData = {
        productImage: postImage,
      };
      UploadImageInS3(userData).then((data) => {
        const product = {
          authorizationToken: getToken(),
          productId: currentProduct._id,
          productName: getValues("productname"),
          productCat: getValues("category"),
          tax: getValues("tax"),
          productprice: getValues("price"),
          productdescription: processText(getValues("description")),
          productfeatures: processFeatures(getValues("Features")),
          productspecifications: processFeatures(getValues("Specifications")),
          productimage: data.body.split('"')[3],
          removeItem: false,
        };
        UpdateProducts(product).then((data) => {
          setSucsess(true);
          setLoading(false);
          setTimeout(() => {
            setSucsess(false);
          }, 3000);
        });
      });
    } else {
      setLoading(true);
      const product = {
        authorizationToken: getToken(),
        productId: currentProduct._id,
        productName: getValues("productname"),
        productCat: getValues("category"),
        tax: getValues("tax"),
        productprice: getValues("price"),
        productdescription: processText(getValues("description")),
        productfeatures: processFeatures(getValues("Features")),
        productspecifications: processFeatures(getValues("Specifications")),
        productimage: currentProduct.productimage,
        removeItem: false,
      };
      UpdateProducts(product).then((data) => {
        console.log(data);
        setSucsess(true);
        setLoading(false);
        setTimeout(() => {
          setSucsess(false);
        }, 3000);
      });
    }
  };

  function processText(txtBox) {
    let lines = txtBox.split("\n");

    // generate HTML version of text
    let resultString = "<p>";
    for (let i = 0; i < lines.length; i++) {
      resultString += lines[i] + "<br/>";
    }
    resultString += "</p>";

    return resultString;
  }

  function processFeatures(txtBox) {
    let lines = txtBox.split("\n");

    // generate HTML version of text
    let resultString = "<ul>";
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] != "") {
        resultString += "<li>" + lines[i] + "</li>";
      }
    }
    resultString += "</ul>";

    return resultString;
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async () => {
    const file = getValues("file")[0];
    const base64 = await convertToBase64(file);
    setPostImage(base64);
    setNewImage(true);
  };

  if (loading) {
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
            <div className="row" style={{ textAlign: "center" }}>
              <Spinner />
            </div>
          </div>
        </section>
      </div>
    );
  } else {
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
            {sucsess ? (
              <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-sm-12 padding-right">
                  <h2 className="profile_title text-center">
                    Product Updated Sucessfully!
                  </h2>
                </div>
              </div>
            ) : (
              <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-sm-12 padding-right">
                  <div className="features_items">
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="contact-form">
                          <h2 className="profile_title text-center">
                            Product Details
                          </h2>
                          <div className="row">
                            <p className="col-sm-9">
                              Product Id : {currentProduct._id}
                            </p>
                            <button
                              className="btn col-sm-2"
                              style={{ background: "red", color: "white" }}
                              onClick={onRemoveItemClick}
                            >
                              Remove Item
                            </button>
                          </div>
                          <br />
                          <form
                            className="contact-form row"
                            name="contact-form"
                            method="post"
                          >
                            <div className="form-group col-md-6">
                              <p>Product Name: </p>
                              <input
                                type="text"
                                className="form-control"
                                required="required"
                                placeholder="Product name"
                                {...register("productname")}
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <p>Product Price: </p>
                              <input
                                type="number"
                                className="form-control"
                                required="required"
                                placeholder="Price"
                                {...register("price")}
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <p>Product Tax: </p>
                              <input
                                type="number"
                                className="form-control"
                                required="required"
                                placeholder="Tax %"
                                {...register("tax")}
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <p>Product Category: </p>
                              <select
                                className="select3"
                                {...register("category")}
                              >
                                <option>rentals</option>

                                <option>beds and mattress</option>

                                <option>power mobility</option>

                                <option>wheel chair</option>

                                <option>rollators</option>

                                <option>walkers</option>

                                <option>walking aid</option>

                                <option>bathroom safety</option>

                                <option>patient room</option>

                                <option>patiant lifts</option>

                                <option>lift chair</option>

                                <option>Ramps</option>
                              </select>
                            </div>
                            <div className="form-group col-md-12">
                              <p>Product Description: </p>
                              <textarea
                                style={{ height: "200px" }}
                                type="text"
                                className="form-control"
                                required="required"
                                placeholder="Despription"
                                {...register("description")}
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <p>Product Features: </p>
                              <textarea
                                style={{ height: "200px" }}
                                type="text"
                                className="form-control"
                                required="required"
                                placeholder="Features"
                                {...register("Features")}
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <p>Product Specifications: </p>
                              <textarea
                                style={{ height: "200px" }}
                                type="text"
                                className="form-control"
                                required="required"
                                placeholder="Specifications"
                                {...register("Specifications")}
                              />
                            </div>
                          </form>
                          <button
                            style={{ width: "40%" }}
                            className="btn btn-primary "
                            onClick={onUpdateClick}
                          >
                            Update Item
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div
                          className="card card-1"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={
                              postImage
                                ? postImage
                                : "../assets/images/uploadImage.jpeg"
                            }
                            style={{
                              height: "250px",
                              maxWidth: "350x",
                              width: "expression(this.width > 500 ? 500: true)",
                            }}
                            alt="Uploaded image will be displayed here"
                          />
                          <input
                            type="file"
                            className="form-control"
                            required="required"
                            placeholder="Upload file"
                            {...register("file")}
                          />
                          <button
                            style={{ width: "100%" }}
                            className="btn btn-primary"
                            onClick={handleFileUpload}
                          >
                            Update Image
                          </button>
                        </div>
                        <div className="card card-1">
                          <div class="switch" style={{fontSize: "18px"}}>
                          <span><input type="checkbox"/><span> - </span>This is a featured product</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}
