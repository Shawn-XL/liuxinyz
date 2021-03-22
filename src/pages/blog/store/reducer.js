import { fromJS } from 'immutable';


const defaultState = fromJS({
    articles: [{
        id:1,
        title:"Test article 1",
        content:"This is a test article content for test article 1"
    },
    {
        id:2,
        title:"Test article 2",
        content:"This is a test article content for test article 2"
    },
    {
        id:3,
        title:"Test article 3",
        content:"This is a test article content for test article 3"
    }],
});

const reducer = (state = defaultState, action) => {
    switch(action.Types) {
        default:
            return state;
    }
}

export default reducer;