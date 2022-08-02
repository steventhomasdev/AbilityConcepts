import React from "react";

export default function Entrances({ images }) {
  console.log(images);
  return (
    <div>
      <br />
      <h1 style={{ color: "#a8be40" }}>Entrances Modification</h1>
      <hr />
      <br />
      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Walkways: </b>
        </span>
        <span>
        Widen to increase manoeuvrability
        </span>
      </div>
      <hr />
      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Guardrails: </b>
        </span>
        <span>
        Installed along ramps, stairs and entrances to provide support
       </span>
      </div>
      <hr /> 

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Lighting: </b>
        </span>
        <span>
         Install at entrances to increase visibility
        </span>
      </div>
      <hr /> 

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Porch lift: </b>
        </span>
        <span>
        Temporary or permanent devices installed to allow easy access up and down porch
        </span>
      </div>
      <br/><br/>
      
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
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>

  );
}
