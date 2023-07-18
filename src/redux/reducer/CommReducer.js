const randomId = e => Math.floor(Math.random() * 10000);

// initial state
export const initailState = {
    loading: false,
    comm: [
		{ id: randomId(), title: 'a0', content: 'b0', done: false, modify: false },
		{ id: randomId(), title: 'a1', content: 'b1', done: false, modify: false },
		{ id: randomId(), title: 'a2', content: 'b2', done: false, modify: false },
		{ id: randomId(), title: 'a3', content: 'b3', done: false, modify: false },
		{ id: randomId(), title: 'a4', content: 'b4', done: false, modify: false },
		{ id: randomId(), title: 'a5', content: 'b5', done: false, modify: false },
	],
    error: '',
}

// reducer
const reducer = (state = initailState, action) => {

    // console.log('actionpayload,??', action.payload)

    // load
    switch(action.type) {
        case "COMM_LOAD_REQUEST" : 
            return {
                ...state,
                loading: true,
            }
        case "COMM_LOAD_SUCCESS" : 
            return {
                ...state,
                // comm: [...state.comm, ...action.payload],
                comm: [...state.comm],
                loading: false,
            }
        case "COMM_LOAD_FAILUE" : 
            return {
                ...state,
                error: action.error,
                loading: false,
            }

        //create
        case "COMM_ADD_REQUEST" : 
            return {
                ...state,
                loading: true,
            }
        case "COMM_ADD_SUCCESS" : 
            return {
                ...state,
                comm: [action.payload, ...state.comm],
                loading: false,
            }
        case "COMM_ADD_FAILUE" : 
            return {
                ...state,
                error: action.error,
                loading: false,
            }

        //edit
        case "COMM_EDIT_REQUEST" : 
            return {
                ...state,
                loading: true,
            }
        case "COMM_EDIT_SUCCESS" : 
            return {
                ...state,
                comm: [...state.comm, ...action.payload],
                loading: false,
            }
        case "COMM_EDIT_FAILUE" : 
            return {
                ...state,
                error: action.error,
                loading: false,
            }

        //delete
        case "COMM_DELETE_REQUEST" : 
            return {
                ...state,
                loading: true,
            }
        case "COMM_DELETE_SUCCESS" : 
            return {
                ...state,
                comm: [...state.comm, ...action.payload],
                loading: false,
            }
        case "COMM_DELETE_FAILUE" : 
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