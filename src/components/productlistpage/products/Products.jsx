import React, { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GetProducts, GetProductsCat } from "../../../api/api";
import Spinner from "../../common/spinner/Spinner";
import "./style/Style.css";
import ReactPaginate from "react-paginate";

export default function Products({ productsList }) {
  const navigate = useNavigate();
  const [productCatList, setproductCatList] = useState();
  const [products, setProducts] = useState(productsList.products.data.body);
  const [searchString, setSearchString] = useState("");
  const [productLoading, setProductLoading] = useState(false);

  //pagination

  const [currentItems, setCurrentItems] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const fetchData = useCallback(() => {
    setProductLoading(true);
    const endOffset = itemOffset + 8;
    GetProductsCat().then((data) => {
      const tempList = data.body.map((obj) => {
        obj["isActive"] = false;
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
        setCurrentItems(data.body.slice(itemOffset, endOffset));
        setProductLoading(false);
      });
    }else{
      setProductLoading(false);
    }
  }, []);

  const pagination = () => {
    const endOffset = itemOffset + 8;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / 8));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    pagination();
  }, [itemOffset]);

  const getInputValue = (event) => {
    const userValue = event.target.value;
    setSearchString(userValue);
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 8) % products.length;
    setItemOffset(newOffset);
  };

  const onSearchButtonClick = () => {
    const endOffset = itemOffset + 8;
    setProductLoading(true);
    const userData = {
      searchString: searchString,
    };

    GetProducts(userData).then((data) => {
      setProducts(data.body);
      if (data.body != "No Products") {
        setCurrentItems(data.body.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.body.length / 8));
      } else {
        setCurrentItems(null);
        setPageCount(Math.ceil(0 / 8));
      }
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

  const onCategoryClick = (event, categoriesData) => {
    setProductLoading(true);
    productCatList.map((category) => {
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
      const endOffset = itemOffset + 8;
      setProducts(data.body);
      if (data.body != "No Products") {
        setCurrentItems(data.body.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.body.length / 8));
      } else {
        setCurrentItems(null);
        setPageCount(Math.ceil(0 / 8));
      }
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
                <br />
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
                <br />
                <br />
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
                        currentItems.map((product, index) => (
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
                        <div className="col-sm-12 padding-right">
                          <div className="features_items">
                            <div className="row">
                              <div
                                className="d-flex justify-content-center align-products-center"
                                id="main"
                              >
                                <div className="inline-block align-middle">
                                  <h2
                                    className="font-weight-normal lead"
                                    id="desc"
                                  >
                                    {/* No Results Found try with different search
                                    keyword. */}
                                    <div className="loading">
                                      {" "}
                                      <img
                                        src="assets/images/noresults.png"
                                        alt="gif"
                                      />
                                    </div>
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
                <div className="loading">
                  <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
