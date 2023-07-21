import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';
import galleryReducer from './galleryReducer';
import commReducer from './CommReducer';

const rootReducer = combineReducers({ 
    youtubeReducer,
    galleryReducer,
    commReducer,
    
})

export default rootReducer;
