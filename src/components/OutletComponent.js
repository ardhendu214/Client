import { Navigate, Outlet } from "react-router-dom";
import { authentication } from "../hook/useLogin";
export function OutletComponentTrue() {
    
    return ( authentication() ? <Outlet/> : <Navigate to="/signin"/>);
    
}
export function OutletComponentFalse() {
    
    return ( !authentication() ? <Outlet/> : <Navigate to="/"/>);
    
}


export function PrivateRoute({children}){
    return ( authentication() ? children : <Navigate to="/signin"/>);
}