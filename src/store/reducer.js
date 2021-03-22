import { reducer as headerReducer } from '../header/store';
import { reducer as blogReducer } from '../pages/blog/store';
import { combineReducers } from 'redux-immutable';

export default combineReducers({
    header: headerReducer,
    blog: blogReducer,
})