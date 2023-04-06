import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useService } from "../hooks/useService";
import { authServiceFactory } from "../services/authService";

export const authContext = createContext();

const AuthProider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const authService = useService(authServiceFactory);

  const onRegisterSubmit = async (data) => {
    const { rePass, ...restData } = data;

    if (rePass !== restData.password) {
      //TODO:add proper error handling
      return;
    }

    try {
      const result = await authService.register(restData);
      setAuth(result);
      navigate("/");
    } catch (error) {
      console.log("Error on register:" + error);
    }
  };

  const context = {
    auth,
    onRegisterSubmit,
  };

  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
};

export default AuthProider;
