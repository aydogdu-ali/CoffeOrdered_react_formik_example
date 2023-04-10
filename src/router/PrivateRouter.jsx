import React, { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import  {
  AuthContext,
} from "../context/AuthContextProvider";

const PrivateRouter = () => {
  // replace eğer kullanıcı giriş yapmadıysa login sayfasına yönlendirir. Kullanıcının tarayıcıdan geri gelmesini sağlar, Bunu yazmazsak kullanıcı geri sayfaya gidemez

   const { currentUser } = useContext(AuthContext);
   console.log(currentUser)



  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
