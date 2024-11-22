import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const connectedUser = useSelector(
    (state: RootState) => state.users.connectedUser,
  );

  console.log(connectedUser);

  if (!connectedUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
