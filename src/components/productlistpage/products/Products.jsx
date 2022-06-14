import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Products({productsList}) {

  const navigate = useNavigate();
  const { state } = useLocation();
  const products= productsList.products.data.body;

  const onProductClick = (event) => {

    let userData = {};

    for (let i in products) {
      if(products[i]._id === event.currentTarget.id){
        userData = {
          product: products[i]
        };
        break;
      }
    }

    navigate("/productdetail", {
      state: {
        products: { userData },
      }
    })
  }

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <div className="brands_products">
                  <h2>Brands</h2>
                  <div className="brands-name">
                    <ul className="nav nav-pills nav-stacked">
                      <li>
                        <a href="">
                          {" "}
                          <span className="pull-right">(50)</span>Acne
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span className="pull-right">(56)</span>Grüne Erde
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span className="pull-right">(27)</span>Albiro
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span className="pull-right">(32)</span>Ronhill
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span className="pull-right">(5)</span>Oddmolly
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span className="pull-right">(9)</span>Boudestijn
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span className="pull-right">(4)</span>Rösch creative
                          culture
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="price-range">
                  <h2>Price Range</h2>
                  {/* <div className="well">
                    <input
                      type="text"
                      className="span2"
                      value=""
                      data-slider-min="0"
                      data-slider-max="600"
                      data-slider-step="5"
                      data-slider-value="[250,450]"
                      id="sl2"
                    />
                    <br />
                    <b>$ 0</b> <b className="pull-right">$ 600</b>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <div className="row">
                {products?.map((product) => (
                  <div className="col-md-3 col-sm-4">
                    <div className="single-new-arrival" onClick={onProductClick} id={[product._id]}>
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
                      <p className="arrival-product-price">${product.productprice}</p>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
