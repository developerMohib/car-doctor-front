import { useContext } from "react";
import { AuthProviderContext } from "../../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthProviderContext);
    const location = useLocation();
    console.log(location.pathname, 'gorrm private')
    if(loading){
        return <p className="text-3xl" > Loading..... </p>
    }
    if(user){
        return children ;
    }
    return <Navigate state={location.pathname} to='/login' >  </Navigate>
};

export default PrivateRoute;