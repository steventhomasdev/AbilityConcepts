import React from "react";

export default function BedRoom({ images }) {
  console.log(images);
  return (
    <div>
      <br />
      <h1 style={{ color: "#a8be40" }}>Bedroom Modification</h1>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-8 col-sm-8">
          <span style={{ color: "#a8be40" }}>
            <b>Nightlights: </b>
          </span>
          <span>Install along path to bedroom</span>
          <hr />
          <span style={{ color: "#a8be40" }}>
            <b>Additional light switch: </b>
          </span>
          <span>Install by door and next to bed</span>
          <hr />
          <span style={{ color: "#a8be40" }}>
            <b>Transfer pole: </b>
          </span>
          <span>
            Install for easy transfer between bed, wheelchair and/or commode
          </span>
        </div>
        {images != undefined ? (
          images?.map((image) => (
            <div className="col-md-3 col-sm-4">
              <div className="single-new-arrival">
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
                    <h2 className="font-weight-normal lead" id="desc"></h2>
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
