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
                comm: action.payload,
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
            // console.log('reducer', action.payload.id)
            // const sel = state.comm.map(item => item.id === action.payload.id ? { ...item, modify: true } : item)
            // console.log('reducer', sel)
            return {
                ...state,
                comm: state.comm.map(item => item.id === action.payload.id ? { ...item, modify: true } : item),
                loading: false,
            }

            // state.comm.map(item => console.log('item??', item)),
        case "COMM_EDIT_FAILUE" : 
            return {
                ...state,
                error: action.error,
                loading: false,
            }



         //edit cancel
         case "COMM_CANCEL_REQUEST" : 
         return {
             ...state,
             loading: true,
         }
        case "COMM_CANCEL_SUCCESS" : 
            // console.log('reducer', action.payload.id)
            // const sel = state.comm.map(item => item.id === action.payload.id ? { ...item, modify: true } : item)
            // console.log('reducer', sel)
            return {
                ...state,
                comm: state.comm.map(item => item.id === action.payload.id ? { ...item, modify: false } : item),
                loading: false,
            }

        case "COMM_CANCEL_FAILUE" : 
            return {
                ...state,
                error: action.error,
                loading: false,
            }


         //update
         case "COMM_UPDATE_REQUEST" : 
         return {
             ...state,
             loading: true,
         }
        case "COMM_UPDATE_SUCCESS" : 
            return {
                ...state,
                comm: state.comm.map(item => item.id === action.payload.id ? { ...item, title: action.payload.title, content: action.payload.content, modify: false } : item),
                loading: false,
            }

        case "COMM_UPDATE_FAILUE" : 
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
                comm: state.comm.filter(item => item.id !== action.payload.id),
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