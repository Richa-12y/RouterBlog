import React from "react";
import { createContext } from "react";
import { Navigate, NavigationType } from "react-router-dom";

export const UserContext = createContext();

const ProtectWrapper = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default ProtectWrapper;
