import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
