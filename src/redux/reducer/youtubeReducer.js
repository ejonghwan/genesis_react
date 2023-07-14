// initial state
export const initailState = {
    loading: false,
    youtube: {},
    error: '',
}



// reducer
const reducer = (state = initailState, action) => {
    switch(action.type) {
        case "YOUTUBE_LOAD_REQUEST" : 
            return {
                ...state,
                loading: true,
            }
        case "YOUTUBE_LOAD_SUCCESS" : 
            return {
                ...state,
                youtube: action.payload,
                loading: false,
            }
        case "YOUTUBE_LOAD_FAILUE" : 
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