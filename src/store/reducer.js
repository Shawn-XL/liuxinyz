import { reducer as headerReducer } from '../header/store';
import { reducer as blogReducer } from '../pages/blog/store';
import { reducer as articleReducer} from '../pages/article/store';
import { combineReducers } from 'redux-immutable';

export default combineReducers({
    header: headerReducer,
    blog: blogReducer,
    article: articleReducer,
})