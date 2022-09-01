

// create Reducer

const ReagisterReducer = (state, {type, payload}) => {

    switch (type) {
        case 'SHOW_PAGE':
            return true; 

        case 'HIDE_PAGE':
            return false;        

        default:
            return state;

    }

}

// export AuthReducer

export default ReagisterReducer;