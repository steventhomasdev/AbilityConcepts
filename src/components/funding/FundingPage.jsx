import React, { useState, useEffect } from "react";
import ADP from "./adp/ADP";
import CHMC from "./chmc/CHMC";
import MsSociety from "./ms_society/MsSociety";
import ODSP from "./odsp/ODSP";
import OntarioMarchOfDimes from "./ontario_march_of_Dimes/OntarioMarchOfDimes";
import OtherFunding from "./other_funding_programs/OtherFunding";
import VAC from "./vac/VAC";
import WSIB from "./wsib/WSIB";
import { useLocation } from "react-router-dom";

export default function FundingPage() {
  const { state } = useLocation();
  const [page, setPage] = useState("ADP");

  useEffect(() => {
    setPage(state.page)
  },[state]);

  const handleClick = (value) => {
    switch (value.target.innerText) {
      case "ADP":
        setPage("ADP");
        break;

      case "ODSP":
        setPage("ODSP");
        break;

      case "MS Society":
        setPage("MS Society");
        break;

      case "VAC":
        setPage("VAC");
        break;

      case "WSIB":
        setPage("WSIB");
        break;

      case "Ontario March Of Dimes":
        setPage("Ontario March Of Dimes");
        break;

      case "CHMC":
        setPage("CHMC");
        break;

      case "Other Funding":
        setPage("Other Funding");
        break;
    }
  };

  const DisplayPage = () => {
    switch (page) {
      case "ADP":
        return <ADP />;

      case "ODSP":
        return <ODSP />;

      case "MS Society":
        return <MsSociety />;

      case "VAC":
        return <VAC />;

      case "WSIB":
        return <WSIB />;

      case "Ontario March Of Dimes":
        return <OntarioMarchOfDimes />;

      case "CHMC":
        return <CHMC />;

      case "Other Funding":
        return <OtherFunding />;

      default:
        return <ADP />;
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
                page === "ADP" ? { color: "#a8be40" } : { color: "#616060" }
              }
            >
              ADP
            </a>
          </li>
          <li>
            <a
              onClick={handleClick}
              style={
                page === "ODSP" ? { color: "#a8be40" } : { color: "#616060" }
              }
            >
              ODSP
            </a>
          </li>
          <li>
            <a
              onClick={handleClick}
              style={
                page === "MS Society"
                  ? { color: "#a8be40" }
                  : { color: "#616060" }
              }
            >
              MS Society
            </a>
          </li>
          <li>
            <a
              onClick={handleClick}
              style={
                page === "VAC" ? { color: "#a8be40" } : { color: "#616060" }
              }
            >
              VAC
            </a>
          </li>
          <li>
            <a
              onClick={handleClick}
              style={
                page === "WSIB" ? { color: "#a8be40" } : { color: "#616060" }
              }
            >
              WSIB
            </a>
          </li>
          <li>
            <a
              onClick={handleClick}
              style={
                page === "Ontario March Of Dimes"
                  ? { color: "#a8be40" }
                  : { color: "#616060" }
              }
            >
              Ontario March Of Dimes
            </a>
          </li>
          <li>
            <a
              onClick={handleClick}
              style={
                page === "CHMC" ? { color: "#a8be40" } : { color: "#616060" }
              }
            >
              CHMC
            </a>
          </li>
          <li>
            <a
              onClick={handleClick}
              style={
                page === "Other Funding"
                  ? { color: "#a8be40" }
                  : { color: "#616060" }
              }
            >
              Other Funding
            </a>
          </li>
        </ol>
      </div>
      <DisplayPage />
    </div>
  );
}
