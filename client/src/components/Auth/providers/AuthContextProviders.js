import { useReducer } from "react";
import AuthContext from "../contexts/AuthContexts";
import AuthReducer from "../reducers/AuthReducer";


// initial value

export const INITIAL_VALUE = {
    isLoginUser : false,
    userInfo    : {}
}


// create AuthProviders
const AuthContextProviders = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, INITIAL_VALUE);

    return (

        <AuthContext.Provider value={{
            isLoginUser : state.isLoginUser,
            userInfo    : state.userInfo,
            dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    
    );
}

// Export AuthContextProviders
export default AuthContextProviders;