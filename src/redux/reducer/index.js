import { combineReducers } from 'redux';
import carReducer from './carReducer';
import youtubeReducer from './youtubeReducer';
import galleryReducer from './galleryReducer';
import commReducer from './CommReducer';

const rootReducer = combineReducers({ 
    carReducer,
    youtubeReducer,
    galleryReducer,
    commReducer,
    
})

export default rootReducer;
