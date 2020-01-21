import { combineReducers } from 'redux';
import currentItem from './currentItem';
import data from './data';

export default combineReducers({
    currentItem,
    data,
});
