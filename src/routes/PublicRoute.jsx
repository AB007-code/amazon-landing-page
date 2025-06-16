import { Navigate } from "react-router-dom";
import { isAuthnticate } from "../utilities/Auth";

const PublicRoute = ({ children }) => {
  return isAuthnticate() ? <Navigate to="/" /> : children;
};

export default PublicRoute;
