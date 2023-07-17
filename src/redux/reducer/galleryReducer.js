// initial state
export const initailState = {
    loading: false,
    gallery: [],
    error: '',
}



// reducer
const reducer = (state = initailState, action) => {
    switch(action.type) {
        // load
        case "GALLERY_LOAD_REQUEST" : 
            return {
                ...state,
                loading: true,
            }
        case "GALLERY_LOAD_SUCCESS" : 
            return {
                ...state,
                gallery: action.payload,
                loading: false,
            }
        case "GALLERY_LOAD_FAILUE" : 
            return {
                ...state,
                error: action.error,
                loading: false,
            }

        // user
        case "GALLERY_USER_REQUEST" : 
            return {
                ...state,
                loading: true,
            }
        case "GALLERY_USER_SUCCESS" : 
            return {
                ...state,
                gallery: action.payload,
                loading: false,
            }
        case "GALLERY_USER_FAILUE" : 
            return {
                ...state,
                error: action.error,
                loading: false,
            }

        // search
        case "GALLERY_SEARCH_REQUEST" : 
            return {
                ...state,
                loading: true,
            }
        case "GALLERY_SEARCH_SUCCESS" : 
            return {
                ...state,
                gallery: action.payload,
                loading: false,
            }
        case "GALLERY_SEARCH_FAILUE" : 
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