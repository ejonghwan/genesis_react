// initial state
export const initailState = {
    loading: false,
    car: [],
    no: 'no',
    ho: 'ho',
}


// action
export const changeNo = data => {
   return {
        type: "NO",
        payload: data.payload
   }
}

export const changeHo = data => {
    return {
         type: "NO",
         payload: data.payload
    }
 }
 
 export const carDataLoad = data => {
    return {
         type: "CAR_DATA_LOAD",
         payload: data
    }
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



        case "NO" : 
            return {
                ...state,
                no: action.payload,
            }

        case "HO" : 
            return {
                ...state,
                ho: action.payload,
            }

        default: 
            return { ...state }
    }
}


export default reducer;