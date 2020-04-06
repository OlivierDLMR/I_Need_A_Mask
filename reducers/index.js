import { combineReducers } from 'redux';
import person from './person';
import currency from './currency';

export default combineReducers({
    person,
    currency
});