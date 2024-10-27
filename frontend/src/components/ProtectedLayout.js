import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import UnauthorizedAccess from "./UnauthorizedAccess";

const ProtectedLayout = () => {
  const { login } = useContext(UserContext);

  /*if (!login) {
        return <Navigate to="/login" replace />
    }*/
  return <> {login ? <Outlet /> : <UnauthorizedAccess />}</>;
};

export default ProtectedLayout;
