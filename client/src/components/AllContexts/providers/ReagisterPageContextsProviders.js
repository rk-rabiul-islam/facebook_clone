import { useReducer } from "react";
import ReagisterPageContexts from "../contexts/ReagisterPageContexts";
import ReagisterReducer from "../reducers/ReagisterReducer";


// initial value

export const INITIAL_VALUE = false;


// create AuthProviders
const ReagisterPageContextsProviders = ({children}) => {

    const [ReagisterState, ReagisterDispatch] = useReducer(ReagisterReducer, INITIAL_VALUE);

    return (

        <ReagisterPageContexts.Provider value={{
            ReagisterState,
            ReagisterDispatch
            }}
        >
            {children}
        </ReagisterPageContexts.Provider>
    
    );
}

// Export AuthContextProviders
export default ReagisterPageContextsProviders;