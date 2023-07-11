// initial state
export const initailState = {
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
 


// reducer
const reducer = (state = initailState, action) => {
    switch(action.type) {
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