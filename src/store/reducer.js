import { reducer as headerReducer } from '../header/store';
import { combineReducers } from 'redux-immutable';

export default combineReducers({
    header: headerReducer,
})