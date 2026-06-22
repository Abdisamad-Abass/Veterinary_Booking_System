import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, children }) => {
  // fully strict check
  if (!token || token === "null" || token === "undefined") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
