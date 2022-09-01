

// create Reducer

const LoderReducer = (state, {type, payload}) => {

    switch (type) {
        case 'LOADER_START':
            return 100; 

        case 'LODER_END':
            return 0;        

        default:
            return state;

    }

}

// export AuthReducer

export default LoderReducer;