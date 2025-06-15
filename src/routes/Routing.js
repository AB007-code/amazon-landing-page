import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routing;
