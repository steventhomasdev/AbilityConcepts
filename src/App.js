import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import ProductListPage from "./components/productlistpage/ProductListPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/productlist" element={<ProductListPage />} />
      </Routes>
    </>
  );
}

export default App;
