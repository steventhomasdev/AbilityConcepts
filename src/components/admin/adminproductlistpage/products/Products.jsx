import React, { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GetProducts, GetProductsCat } from "../../../../api/api";
import Spinner from "../../../common/spinner/Spinner";
import "./style/Style.css";

export default function Products({ productsList }) {
  const navigate = useNavigate();
  const [productCatList, setproductCatList] = useState();
  const [products, setProducts] = useState(productsList.products.data.body);
  const [searchString, setSearchString] = useState("");
  const [productLoading, setProductLoading] = useState(false);

  const fetchData = useCallback(() => {
    GetProductsCat().then((data) => {

      const cat = products ? products[0].productCat : "Rollators"

      const tempList = data.body.map((obj) => {
        if (obj["cat"].toLowerCase() == cat) {
          obj["isActive"] = true;
        } else {
          obj["isActive"] = false;
        }
        return obj;
      });
      setproductCatList(tempList);
    });

    if (products === "No Products") {
      const userData = {
        category: "all",
      };

      GetProducts(userData).then((data) => {
        setProducts(data.body);
      });
    }
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
      setProducts(data.body);
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

    navigate("/editproducts", {
      state: {
        products: { userData },
      },
    });
  };

  const onCategoryClick = (event, categoriesData) => {
    setProductLoading(true);
    productCatList.map((category, index) => {
      if (category.cat === categoriesData.cat) {
        category["isActive"] = true;
      } else {
        category["isActive"] = false;
      }
    });

    const userData = {
      category: event.currentTarget.id.toLowerCase(),
    };

    GetProducts(userData).then((data) => {
      setProducts(data.body);
    });
    setTimeout(() => {
      setProductLoading(false);
    }, 1000);
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
          {productCatList === undefined ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : (
            <div className="row">
              <div className="col-sm-3">
                <div className="searchProduct">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="What are you looking for?"
                    onChange={getInputValue}
                  />
                  <button
                    type="submit"
                    className="searchButton"
                    onClick={onSearchButtonClick}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
                <div className="left-sidebar">
                  <div className="brands_products" style={{ marginTop: "5%" }}>
                    <h2>Categories</h2>
                    <div className="brands-name">
                      <ul className="nav nav-pills nav-stacked">
                        {productCatList?.map((category, index) => (
                          <li className="active" key={index}>
                            <a
                              style={{
                                color: category.isActive
                                  ? "#a8be40"
                                  : "#696763",
                              }}
                              onClick={(event) =>
                                onCategoryClick(event, category)
                              }
                              id={category.cat}
                            >
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
                  {productLoading ? (
                    <div className="loading">
                      <Spinner />
                    </div>
                  ) : (
                    <div className="row">
                      {products != "No Products" ? (
                        products?.map((product, index) => (
                          <div className="col-md-3 col-sm-4" key={index}>
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
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
