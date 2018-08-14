import {combineReducers} from 'redux';
import counter from './counterReducer';

const rootReducer  = combineReducers ({
    // counter:counter,
    counter:counter,
});

export default rootReducer;