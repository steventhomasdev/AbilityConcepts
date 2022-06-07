import React from "react";

export default function FeaturedProducts({products}) {

  const FeaturedProducts = products.slice(3, 8)
  return (
    <div>
      <section id="feature" className="feature">
        <div className="container">
          <div className="section-header">
            <h2>featured products</h2>
          </div>
          <div className="feature-content">
            <div className="row">
              {
                FeaturedProducts?.map((products) =>(
                  <div className="col-sm-3">
                  <div className="single-feature">
                    <img
                      src={products.productimage}
                      alt="feature image"
                    />
                    <div className="single-feature-txt text-center">
                      <p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="spacial-feature-icon">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="feature-review">(45 review)</span>
                      </p>
                      <h3>
                        <a href="#">{products.productName}</a>
                      </h3>
                      <h5>${products.productprice}</h5>
                    </div>
                  </div>
                </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
