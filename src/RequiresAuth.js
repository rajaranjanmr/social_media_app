import {useLocation,Navigate} from "react-router-dom";
import { useAuth } from "./context/authContext";

function RequiresAuth({children}){
    const location = useLocation();
    const {isLoggedIn} = useAuth();
    return (isLoggedIn ? children :<Navigate to="/" 
    state={{ from: location }} replace/> )
}
export {RequiresAuth}