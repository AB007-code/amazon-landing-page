import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
