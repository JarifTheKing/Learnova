import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import MyLoader from "../Pages/MyLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <MyLoader></MyLoader>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
