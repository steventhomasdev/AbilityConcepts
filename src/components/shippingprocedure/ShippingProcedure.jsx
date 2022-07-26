import react from "react";

export default function ShippingProcedure() {
  return (
    <div className="container">
      <div className="breadcrumbs">
        <ol className="breadcrumb">
          <li>
            <a>Home</a>
          </li>
          <li className="active">Shipping Procedure</li>
        </ol>
      </div>
      <br />
      <h1 style={{ color: "#a8be40" }}>Shipping Procedure</h1>

      <hr />

      <p>
        Shipping cost are an addition to the prices listed, it depends on size,
        weight, and distance to be shipped.
      </p>
    </div>
  );
}
