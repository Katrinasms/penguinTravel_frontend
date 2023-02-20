import React from "react";
import { Navigate } from "react-router-dom";

function  PrivateRouter({ children }) {
    const token = window.localStorage.getItem("userInfo");

    if (!token){
        return <Navigate to="/login" />
    }
  return children;
}

export default PrivateRouter;
