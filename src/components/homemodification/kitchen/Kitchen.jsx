import React from "react";

export default function Kitchen({ images }) {
    console.log(images);
    return (
        <div>
            <br />
            <h1 style={{ color: "#a8be40" }}>Kitchen Modification</h1>
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
                                        {<h2 className="font-weight-normal lead" id="desc">
                                            No Results Found try with different search keyword.
                                        </h2>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div>
                <span style={{ color: "#a8be40" }}>
                    <b>Countertops: </b>
                </span>
                <span>
                    Lowered to increase convenience Rounded off to prevent sharp edge injuries
                </span>
            </div>
            <hr />
            <div>
                <span style={{ color: "#a8be40" }}>
                    <b>Rolling Cart: </b>
                </span>
                <span>
                    Provided to transfer food from kitchen to dining area
                </span>
            </div>
            <hr />

            <div>
                <span style={{ color: "#a8be40" }}>
                    <b>Adjustable Mirror:  </b>
                </span>
                <span>
                    Installed to increase visibility
                </span>
            </div>
            <hr />
            <div>
                <span style={{ color: "#a8be40" }}>
                    <b>Counter Mounted Stovetop:  </b>
                </span>
                <span>
                    Installed to accommodate wheelchair tenant
                </span>
            </div>
            <hr />
            <div>
                <span style={{ color: "#a8be40" }}>
                    <b>Sink:   </b>
                </span>
                <span>
                    Install shallow sink to increase convenience to tenant Provide space below sink for wheelchair accessibility Lowering of sink
                </span>
            </div>
            <hr />
            <div>
                <span style={{ color: "#a8be40" }}>
                    <b>Cabinets: </b>
                </span>
                <span>
                    Lower to accommodate tenant in wheelchair
                </span>
            </div>
            <hr />
            <div>
                <span style={{ color: "#a8be40" }}>
                    <b>Non-skid flooring:   </b>
                </span>
                <span>
                    Install to prevent falls
                </span>
            </div>
            <hr />
          

        </div>




    );
}
