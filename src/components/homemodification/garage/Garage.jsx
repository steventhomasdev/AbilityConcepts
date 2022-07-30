import React from "react";

export default function Garage({ images }) {
  console.log(images);
  return (
    <div>
      <br />
      <h1 style={{ color: "#a8be40" }}>Garage Modification</h1>
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
                    <h2 className="font-weight-normal lead" id="desc">
                      No Results Found try with different search keyword.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Clean: </b>
        </span>
        <span>
         Clean out obstacles to increase manoeuvrability and to decrease injuries
        </span>
      </div>
      <hr />
      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Ramp: </b>
        </span>
        <span>
        Install if necessary
       </span>
      </div>
      <hr /> 

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Lighting: </b>
        </span>
        <span>
         Install to increase visibility
         </span>
      </div>
      <hr /> 

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Automatic garage door opener: </b>
        </span>
        <span>
        Eliminates the need to lift heavy garage doors
        </span>
      </div>
      <hr /> 
      

        

    </div>

  );
}
