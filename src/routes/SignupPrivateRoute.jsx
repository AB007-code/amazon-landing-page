import { Navigate } from "react-router-dom";
import { isAuthnticate } from "../utilities/Auth";

const SignupPrivateRoute = ({ children }) => {
  return isAuthnticate() ? <Navigate to="/home" /> : children;
};

export default SignupPrivateRoute;
