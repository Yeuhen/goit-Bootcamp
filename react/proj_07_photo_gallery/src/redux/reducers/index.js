import {combineReducers} from 'redux';
import search from './searcReduce'
import gallery from './galleryReduce';

const rootReducer = combineReducers ({
    search,
    gallery,
});

export default rootReducer;