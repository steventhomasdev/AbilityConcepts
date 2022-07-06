import React, { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GetProducts, GetProductsCat } from "../../../api/api";
import Spinner from "../../common/spinner/Spinner";
import SpinnerSmall from "../../common/spinnersmall/SpinnerSmall";
import "./style/Style.css";

export default function Products({ productsList }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [productCatList, setproductCatList] = useState("empty");
  const products = productsList.products.data.body;
  const [loading, setLoading] = useState(true);
  const [searchString, setSearchString] = useState("");
  const [productLoading, setProductLoading] = useState(false);

  const fetchData = useCallback(() => {
    GetProductsCat()
      .then((data) => setproductCatList(data.body))
      .then(setLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const getInputValue = (event) => {
    const userValue = event.target.value;
    setSearchString(userValue);
  };

  const onSearchButtonClick = () => {
    setProductLoading(true);
    const userData = {
      searchString: searchString,
    };

    GetProducts(userData).then((data) => {
      navigate("/productlist", {
        replace: true,
        state: {
          products: { data },
        },
      });
    });

    setTimeout(() => {
      setProductLoading(false);
    }, 1000);
  };

  const onProductClick = (event) => {
    let userData = {};
    for (let i in products) {
      if (products[i]._id === event.currentTarget.id) {
        userData = {
          product: products[i],
        };
        break;
      }
    }

    navigate("/productdetail", {
      state: {
        products: { userData },
      },
    });
  };

  const onCategoryClick = (event) => {
    const userData = {
      category: event.currentTarget.id,
    };

    GetProducts(userData).then((data) => {
      navigate("/productlist", {
        replace: true,
        state: {
          products: { data },
        },
      });
    });
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <a>Home</a>
              </li>
              <li className="active">Products</li>
            </ol>
          </div>
          {loading || productCatList === "empty" ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : (
            <div className="row">
              <div className="col-sm-3">
                <div class="searchProduct">
                  <input
                    type="text"
                    class="searchTerm"
                    placeholder="What are you looking for?"
                    onChange={getInputValue}
                  />
                  {productLoading ? (
                    <div className="loading">
                      <SpinnerSmall />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      class="searchButton"
                      onClick={onSearchButtonClick}
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  )}
                </div>
                <div className="left-sidebar">
                  <div className="brands_products" style={{ marginTop: "5%" }}>
                    <h2>Categories</h2>
                    <div className="brands-name">
                      <ul className="nav nav-pills nav-stacked">
                        {productCatList?.map((category) => (
                          <li>
                            <a onClick={onCategoryClick} id={category.cat}>
                              {category.cat}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-9 padding-right">
                <div className="features_items">
                  <div className="row">
                    {products != "No Products" || loading ? (
                      products?.map((product) => (
                        <div className="col-md-3 col-sm-4">
                          <div
                            className="single-new-arrival"
                            onClick={onProductClick}
                            id={[product._id]}
                          >
                            <div className="single-new-arrival-bg">
                              <img
                                src={product.productimage}
                                alt={product.productName}
                              />
                              <div className="single-new-arrival-bg-overlay"></div>
                              <div className="new-arrival-cart">
                                <p>
                                  <a>
                                    View <span>details </span>
                                  </a>
                                </p>
                                <p className="arrival-review pull-right">
                                  <span className="lnr lnr-frame-expand"></span>
                                </p>
                              </div>
                            </div>
                            <h4>
                              <a>{product.productName}</a>
                            </h4>
                            <p className="arrival-product-price">
                              ${product.productprice}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-sm-9 padding-right">
                        <div className="features_items">
                          <div className="row">
                            <div
                              className="d-flex justify-content-center align-items-center"
                              id="main"
                            >
                              <div className="inline-block align-middle">
                                <h2
                                  className="font-weight-normal lead"
                                  id="desc"
                                >
                                  No Results Found try with different search
                                  keyword.
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
