import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail";

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Routing;
