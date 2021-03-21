import { fromJS } from 'immutable';
import * as Types from './actionTypes';


const defaultState = fromJS({
    location: '/home',
});

const reducer = (state = defaultState, action) => {
    switch(action.Types) {
        case Types.CHANGE_LOCATION:
            return state.set('location', action.data);
        default:
            return state;
    }
}

export default reducer;