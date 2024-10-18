import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function RequireAuth() {
    const { userLogin } = useContext(AuthContext)
    const location = useLocation()

  return (
    userLogin ? 
     <Outlet/> : 
    <Navigate to='/login' state={{from: location}} replace/>
  )
}

export default RequireAuth