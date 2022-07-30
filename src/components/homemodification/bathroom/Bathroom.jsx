import React from "react";

export default function Bathroom({ images }) {
  console.log(images);
  return (
    <div>
      <br />
      <h1 style={{ color: "#a8be40" }}>Bathroom Modification</h1>
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
          <b>Walk-In Bathtub : </b>
        </span>
        <span>
          Easier and safer to enter than a conventional bathtub. Requires the
          user to have enough use of his/her legs to step over a gap that is
          roughly 4 inches high and enough use of his/her arms to open/close a
          very light door
        </span>
      </div>
      <hr />
      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Accessible Sink : </b>
        </span>
        <span>
          A vanity sink raised or lowered appropriately to allow for space for a
          wheelchair test
        </span>
      </div>
      <hr /> 

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Grab bars : </b>
        </span>
        <span>
        Install grab bars in the bathtub, the shower, and on both sides of the toilet. They would also be helpful outside the tub and shower for support and balance.
        </span>
      </div>
      <hr /> 
      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Non-slip and slip resistant mats and strips: </b>
        </span>
        <span>
         Install in bath tub, shower and bathroom floor
        </span>
      </div>
      <hr /> 
      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Transfer seat: </b>
        </span>
        <span>
        Install in tub or build on platform to allow for easy access into and out of shower/bathing area
        </span>
      </div>
      <hr /> 

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Roll-in shower: </b>
        </span>
        <span>
         Install for wheelchair entry
        </span>
      </div>
      <hr /> 


      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Fold-down shower seat:  </b>
        </span>
        <span>
        Install for comfort during showering
        </span>
      </div>
      <hr /> 

      <div>
        <span style={{ color: "#a8be40" }}>
          <b> Anti-scalding devices (water temperature regulator): </b>
        </span>
        <span>
          Install in sinks, showers and bath tubs to prevent burning
         </span>
      </div>
      <hr /> 



      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Raised toilet seat: </b>
        </span>
        <span>
         Install to assist in standing
        </span>
      </div>
      <hr /> 



      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Lever faucet handles: </b>
        </span>
        <span>
          Replace turn-style faucet handles
        </span>
      </div>
      <hr /> 

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Motion Sensor Faucet</b>
        </span>
 
      </div>
      <hr /> 
      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Bathtub removal: </b>
        </span>
        <span>
        Bathtubs are the most dangerous place in the house. Replacement of a bathtub by a shower with curtain is the best way to reconfigure your bathroom for maximum safety.
        </span>
      </div>
      <hr /> 

    </div>

  );
}
