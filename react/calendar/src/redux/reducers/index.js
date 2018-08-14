import {combineReducers} from 'redux';
import now from './nowReducer';
import days from './daysReducer';

const rootReducer = combineReducers ({
    now,
    days,
});


export default rootReducer;