import React, { useState } from "react";
import { getToken } from "../../utls/Session";
import { useForm } from "react-hook-form";
import { AddProduct, UploadImageInS3 } from "../../../api/api";
import Spinner from "../../common/spinner/Spinner";

export default function AddProducts() {
  const { register, getValues, setValues } = useForm();
  const [loading, setLoading] = useState(false);
  const [sucsess, setSucsess] = useState(false);
  const [postImage, setPostImage] = useState();

  const onAddClick = () => {
    if (postImage) {
      setLoading(true);
      const userData = {
        productImage: postImage,
      };
      UploadImageInS3(userData).then((data) => {
        const product = {
          authorizationToken: getToken(),
          productName: getValues("productname"),
          productCat: getValues("category"),
          tax: getValues("tax"),
          productprice: getValues("price"),
          productdescription: processText(getValues("description")),
          productfeatures: processFeatures(getValues("Features")),
          productspecifications: processFeatures(getValues("Specifications")),
          productimage: data.body.split('"')[3],
        };
        AddProduct(product).then((data) => {
          setSucsess(true);
          setLoading(false);
          setValues("productname");
          setValues("category");
          setValues("tax");
          setValues("price");
          setValues("description");
          setValues("Features");
          setValues("Specifications");
          setTimeout(() => {
            setSucsess(false);
          }, 3000);
        });
      });
    }
  };

  function processText(txtBox) {
    let lines = txtBox.split("\n");

    // generate HTML version of text
    let resultString = "<p>";
    for (let i = 0; i < lines.length; i++) {
      resultString += lines[i] + "<br />";
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
    console.log({file})
    const base64 = await convertToBase64(file);
    setPostImage(base64);
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
                <li className="active">Add Product</li>
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
                <li className="active">Add Product</li>
              </ol>
            </div>
            {sucsess ? (
              <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-sm-12 padding-right">
                  <h2 className="profile_title text-center">
                    Product Added Sucessfully!
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
                            {" "}
                            Product Details
                          </h2>
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
                            onClick={onAddClick}
                          >
                            Add Item
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
                                : "assets/images/uploadImage.jpeg"
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
                            Upload Image
                          </button>
                        </div>
                        <div></div>
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
