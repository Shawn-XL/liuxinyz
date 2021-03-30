import { fromJS } from 'immutable';
import * as Types from './actionTypes';


const defaultState = fromJS({
    article: {},
});

const reducer = (state = defaultState, action) => {
    console.log('data: ', action);
    switch (action.type) {
        case Types.LOAD_ARTICLE:
            return state.set('article', fromJS(action.data));
        default:
            return state;
    }
}

export default reducer;