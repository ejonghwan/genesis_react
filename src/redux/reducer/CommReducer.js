const randomId = e => Math.floor(Math.random() * 10000);

 
// initial state
export const initailState = {
    loading: false,
    comm: [
		{ id: randomId(), title: 'Quisquam reiciendis', content: 'Quisquam reiciendis cumque iusto eius quo modi dolorum eveniet quos, qui explicabo nemo in molestiae totam, ullam quod.', done: false, modify: false },
		{ id: randomId(), title: 'Earum suscipit quo', content: 'Earum suscipit quo consequuntur inventore nihil corrupti quas necessitatibus ipsum itaque iste eum, libero dolores nemo laborum at fugit consectetur veniam tempora aliquam sequi natus aut.', done: false, modify: false },
		{ id: randomId(), title: 'adipisicing elit. ', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ', done: false, modify: false },
		{ id: randomId(), title: 'Sit autem, temporibus aliquid ipsam', content: 'Sit autem, temporibus aliquid ipsam beatae ab vero quam similique sunt repellendus libero rem illum, optio, accusantium inventore deleniti nihil fuga iusto! Dolorem deleniti iure recusandae culpa atque molestiae consequuntur ducimus repellendus temporibus, eius esse neque. Cupiditate vel eos dolor!', done: false, modify: false },
		{ id: randomId(), title: 'Sunt debitis itaque iste voluptates,', content: 'Sunt debitis itaque iste voluptates, tempora corporis ratione tenetur magni provident similique ut sequi unde neque harum quos rerum eaque tempore! Consequatur dolor molestias similique ', done: false, modify: false },
		{ id: randomId(), title: 'Laborum, similique.', content: 'Laborum, similique. Nam tempore, at ducimus iste neque exercitationem porro commodi! Illo, cumque aspernatur quos quaerat ipsam nisi quisquam ducimus eos laboriosam ex veritatis magnam itaque sapiente ea qui, iste molestiae porro nam non fugit? ', done: false, modify: false },
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