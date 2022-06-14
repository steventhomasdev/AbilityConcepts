import React, { useEffect }  from "react";

export default function Products({productsList}) {

  const products= productsList.products.data.body;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="left-sidebar">
                <div class="brands_products">
                  <h2>Brands</h2>
                  <div class="brands-name">
                    <ul class="nav nav-pills nav-stacked">
                      <li>
                        <a href="">
                          {" "}
                          <span class="pull-right">(50)</span>Acne
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span class="pull-right">(56)</span>Grüne Erde
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span class="pull-right">(27)</span>Albiro
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span class="pull-right">(32)</span>Ronhill
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span class="pull-right">(5)</span>Oddmolly
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span class="pull-right">(9)</span>Boudestijn
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {" "}
                          <span class="pull-right">(4)</span>Rösch creative
                          culture
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="price-range">
                  <h2>Price Range</h2>
                  {/* <div class="well">
                    <input
                      type="text"
                      class="span2"
                      value=""
                      data-slider-min="0"
                      data-slider-max="600"
                      data-slider-step="5"
                      data-slider-value="[250,450]"
                      id="sl2"
                    />
                    <br />
                    <b>$ 0</b> <b class="pull-right">$ 600</b>
                  </div> */}
                </div>
              </div>
            </div>

            <div class="col-sm-9 padding-right">
              <div class="features_items">
                <div class="row">
                {products?.map((product) => (
                  <div class="col-md-3 col-sm-4">
                    <div class="single-new-arrival">
                      <div class="single-new-arrival-bg">
                        <img
                          src={product.productimage}
                          alt={product.productName}
                        />
                        <div class="single-new-arrival-bg-overlay"></div>
                        <div class="new-arrival-cart">
                          <p>
                            <a href="#">
                              View <span>details </span>
                            </a>
                          </p>
                          <p class="arrival-review pull-right">
                            <span class="lnr lnr-frame-expand"></span>
                          </p>
                        </div>
                      </div>
                      <h4>
                        <a href="#">{product.productName}</a>
                      </h4>
                      <p class="arrival-product-price">${product.productprice}</p>
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
