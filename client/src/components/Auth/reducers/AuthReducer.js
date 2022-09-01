

// create Reducer

const AuthReducer = (state, {type, payload}) => {

    switch (type) {
        case 'LOGIN_USER_SUCCESS':
            return {
                isLoginUser : true,
                userInfo    : payload
              } 

        case 'LOG_OUT':
            return {
                token : null 
            }        


        default:
            return state;

    }

}

// export AuthReducer

export default AuthReducer;