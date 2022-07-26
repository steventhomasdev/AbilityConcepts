import react from "react";

export default function ServiceEducation() {
  return (
    <div className="container">
      <div className="breadcrumbs">
        <ol className="breadcrumb">
          <li>
            <a>Home</a>
          </li>
          <li className="active">Service Education</li>
        </ol>
      </div>
      <br />
      <h1 style={{ color: "#a8be40" }}>Service Education / Workshop schedule</h1>
      <hr />

      <p>
        Ability Concepts is dedicated to offering a variety of in-services
        sessions for Health Care Professionals, our clients, and our customers.
      </p>
      <p>
        Our educational sessions are provided free of charge and include lunch
        and attendance certificates.
      </p>
      <br />
      <p>
        If interested in the above, please send a request to
      </p>
      <br/>
      <a target="_blank" href="mailto:info@abilityconcepts.ca">
          info@abilityconcepts.ca
        </a>
    </div>
  );
}
