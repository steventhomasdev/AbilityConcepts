import React, { useState } from "react";
import OurCommunity from "./ourcommunity/OurCommunity";
import OurCompany from "./ourcompany/OurCompany";
import OurPartners from "./ourpartners/OurPartners";

export default function AboutUs() {
  const [page, setPage] = useState("Company");

  const handleClick = (value) => {
    switch (value.target.innerText) {
      case "Company":
        setPage("Company");
        break;

      case "Community":
        setPage("Community");
        break;

      case "Partners":
        setPage("Partners");
        break;

      case "Why Ability":
        setPage("Why Ability");
        break;
    }
  };

  const DisplayPage = () => {
    switch (page) {
      case "Company":
        return <OurCompany />;

      case "Community":
        return <OurCommunity />;

      case "Partners":
        return <OurPartners />;

      //   case "Why Ability":
      //     return <OurCommunity />;

      default:
        return <OurCompany />;
    }
  };

  return (
    <div className="container">
      <div>
        <ol className="breadcrumb_about_us breadcrumb ">
          <li>
            <a
              onClick={handleClick}
              style={
                page === "Company" ? { color: "#a8be40" } : { color: "#616060" }
              }
            >
              Company
            </a>
          </li>
          <li>
            <a
              onClick={handleClick}
              style={
                page === "Community"
                  ? { color: "#a8be40" }
                  : { color: "#616060" }
              }
            >
              Community
            </a>
          </li>
          <li>
            <a
              onClick={handleClick}
              style={
                page === "Partners"
                  ? { color: "#a8be40" }
                  : { color: "#616060" }
              }
            >
              Partners
            </a>
          </li>
          {/* <li>
            <a onClick={handleClick} style={ page === "Why Ability" ?  {color: "#a8be40"} : {color: "black"}}>Why Ability</a>
          </li> */}
        </ol>
      </div>
      <DisplayPage />
    </div>
  );
}
