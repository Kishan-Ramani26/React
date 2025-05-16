import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Protected({ children, authentication = true }) {
  const Navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setloader] = useState(true);

  useEffect(() => {

    // true && false !== true -it means user is not authenticate
    if (authentication && authStatus !== authentication) {
      Navigate("/login");
    } 
    
    // false && true !== true -it means user is authenticate
    else if (!authentication && authStatus !== authentication) {
      Navigate("/");
    }
    setloader(false);
  }, [authentication, Navigate, authStatus]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
