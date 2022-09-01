
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContexts";


// Create Redirections

export const UnAuthorizedUser = ({ children }) => {
    const {isLoginUser} = useContext(AuthContext);

        return isLoginUser ? children : <Navigate to="/login"/>;
    
};

export const AuthorizedUser = ({ children }) => {
    const {isLoginUser} = useContext(AuthContext);

        return isLoginUser ?<Navigate to="/"/> : children ;

    
};