import React from "react";

export default function HallWays({ images }) {
  console.log(images);
  return (
    <div>
      <br />
      <h1 style={{ color: "#a8be40" }}>Hallways Modification</h1>
      <hr />
      <br />
      <div className="row">
        {images != undefined ? (
          images?.map((image) => (
            <div className="col-md-3 col-sm-4">
              <div
                className="single-new-arrival"

              >
                <div className="single-new-arrival-bg">
                  <img src={image} />
                  <div className="single-new-arrival-bg-overlay"></div>
                </div>
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
                    {/* <h2 className="font-weight-normal lead" id="desc">
                      No Results Found try with different search keyword.
                    </h2> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Hallways and doorways: </b>
        </span>
        <span>
         Widen to facilitate movement
        </span>
      </div>
      <hr />
      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Handrails: </b>
        </span>
        <span>
       Install handrails on both sides to increase safety
       </span>
      </div>
      <hr /> 

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Lighting: </b>
        </span>
        <span>
         Install to increase visibility (back-up lighting also preferred)
         </span>
      </div>
      <hr /> 

    </div>

  );
}
