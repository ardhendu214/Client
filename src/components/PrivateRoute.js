import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { authentication } from "../hook/useLogin";
async function PrivateRoute({children}) {
    console.log(children)
    useEffect(()=>{
        authentication()
            .then(auth => {
                return ( auth.isLogedin ? children : <Navigate to="/signin"/>);
            })
    },[children])
}

export default PrivateRoute;