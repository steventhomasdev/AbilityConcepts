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
          wheelchair
        </span>
      </div>
      <hr />
    </div>
  );
}
