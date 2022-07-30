import React from "react";

export default function GrabBars({ images }) {
  console.log(images);
  return (
    <div>
      <br />
      <h1 style={{ color: "#a8be40" }}>Grab Bars Modifications</h1>
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
          <b>Seat mounted: </b>
        </span>
        <span>
        Fitted especially for the toilet, bars may wiggle or need adjustment over time
        </span>
      </div>
      <hr />



      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Floor mounted: </b>
        </span>
        <span>
        Often used near toilets and tubs and showers, permanent, may require wall and floor reinforcement
        </span>
      </div>
      <hr /> 

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Folding or Pivoting: </b>
        </span>
        <span>
        Wall mounted and can be moved when not in use; subject to maintenance and movement problems
        </span>
      </div>
      <hr /> 
      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Portable: </b>
        </span>
        <span>
        Moveable, easily stored and can travel with the user, attaches with combination of clamps, screws or suction cups
        </span>
      </div>
      <hr /> 



    </div>

    






    

  );
}
