import { useReducer } from "react";
import LoaderContexts from "../contexts/LoaderContexts";
import LoderReducer from "../reducers/LoderReducer";


// initial value

export const INITIAL_VALUE = 0;


// create AuthProviders
const LoaderContextProviders = ({children}) => {

    const [LoagerState, LoaderDispatch] = useReducer(LoderReducer, INITIAL_VALUE);

    return (

        <LoaderContexts.Provider value={{
            LoagerState,
            LoaderDispatch
            }}
        >
            {children}
        </LoaderContexts.Provider>
    
    );
}

// Export AuthContextProviders
export default LoaderContextProviders;