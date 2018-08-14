import {combineReducers} from 'redux';
import counter from './counterReducer';
import gallery from './galleryReducer'

const rootReducer = combineReducers ({
    // counter:counter,
    counter,
    gallery,
});

export default rootReducer;