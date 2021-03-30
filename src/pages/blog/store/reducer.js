import { fromJS } from 'immutable';
import * as types from './actionTypes';

const defaultState = fromJS({
    articles: [],
});

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case types.LOAD_BLOG_ARTICLES:
            return state.set('articles', fromJS(action.data));
        default:
            return state;
    }
}

export default reducer;