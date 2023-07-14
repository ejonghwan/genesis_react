import { combineReducers } from 'redux';
import carReducer from './carReducer';
import youtubeReducer from './youtubeReducer';

const rootReducer = combineReducers({ 
    carReducer,
    youtubeReducer
})

export default rootReducer;
