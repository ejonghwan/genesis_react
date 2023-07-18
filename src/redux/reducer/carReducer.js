// initial state
export const initailState = {
    loading: false,
    car: [],
    error: '',
}



// reducer
const reducer = (state = initailState, action) => {
    switch(action.type) {
        case "CAR_DATA_LOAD" : 
            return {
                ...state,
                loading: true,
            }
        case "CAR_DATA_SUCCESS" : 
            return {
                ...state,
                car: state.car.concat(action.payload),
                loading: false,
            }
        case "CAR_DATA_FAILUE" : 
            return {
                ...state,
                error: action.error,
                loading: false,
            }



      

        default: 
            return { ...state }
    }
}


export default reducer;