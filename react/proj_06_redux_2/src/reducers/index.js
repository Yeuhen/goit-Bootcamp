import {combineReducers} from 'redux';
import inputItem from './inputReducer';
import arrayItems from './arrayReducer'

const rootReducer = combineReducers ({
    inputItem,
    arrayItems
});

export default rootReducer;