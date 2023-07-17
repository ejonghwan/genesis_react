import { combineReducers } from 'redux';
import carReducer from './carReducer';
import youtubeReducer from './youtubeReducer';
import galleryReducer from './galleryReducer';

const rootReducer = combineReducers({ 
    carReducer,
    youtubeReducer,
    galleryReducer
})

export default rootReducer;
