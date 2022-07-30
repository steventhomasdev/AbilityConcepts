import React from "react";

export default function Lifts({ images }) {
  console.log(images);
  return (
    <div>
      <br />
      <h1 style={{ color: "#a8be40" }}>MULTI-PURPOSE STRAP-AND-LOOP SLINGS</h1>
      <hr />
      <br />
      <div className="row">
        {images !== undefined ? (
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <span>
          General slings are multi-purpose strap-and-loop slings with built-in
          flexibility to achieve leg and body positioning. General slings have
          equal application on ceiling and floor lifts. The non-proprietary
          strap-and-loop attachments are industry standard and are suitable for
          use on any carrybar designed for strap-and-loop slings.
        </span>
        <span>
          <ul className="bulletPoint">
            <li>General Purpose Sling</li>
            <li>Hygiene Sling</li>
            <li>Full Body Support Sling</li>
          </ul>
        </span>
      </div>
      <hr />

      <div>
        <span style={{ color: "#a8be40" }}>
          <b>Ceiling lifts: </b>
        </span>
        <span>
          Mechanical patient lifting devices allow independent mobility
          throughout the house and eliminate unsafe manual lifting of patients
          for care providers.Positioning slings are used for repositioning and
          for supine transfers. They are used primarily for ceiling lifts. Back
          belt slings are a specialty sling used on a sit-to-stand device
        </span>
      </div>
      <hr />
    </div>
  );
}
