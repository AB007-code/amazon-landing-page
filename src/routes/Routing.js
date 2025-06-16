import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../components/PageNotFound";
import { isAuthnticate } from "../utilities/Auth";
import SignupPrivateRoute from "./SignupPrivateRoute";
const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/signin"
        element={
          <PublicRoute>
            <Signin />
          </PublicRoute>
        }
      />
      <Route
        path="signup"
        element={
          <SignupPrivateRoute>
            <Signup />
          </SignupPrivateRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
