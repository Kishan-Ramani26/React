import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setloader] = useState(true);

  useEffect(() => {

    
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } 
    
    // false && true !== true -it means user is authenticate
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setloader(false);
  }, [authentication, navigate, authStatus]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
