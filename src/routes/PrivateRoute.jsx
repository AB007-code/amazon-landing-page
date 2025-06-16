import { Navigate } from "react-router-dom";
import { isAuthnticate } from "../utilities/Auth";

const PrivateRoute = ({ children }) => {
  return isAuthnticate() ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
