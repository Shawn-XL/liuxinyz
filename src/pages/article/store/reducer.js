import { fromJS } from 'immutable';


const defaultState = fromJS({
    article: {
        id:1,
        title:"What is 2D Array(Matrix)?",
        content:"Matrix is a rectangular two-dimensional array of numbers arranged in rows and columns. A matrix with m rows and n columns can be called an m × n matrix. Individual entries in the matrix are called elements and can be represented by a[i,j] which suggests that the element a is present in the ith row and jth column."
    },
});

const reducer = (state = defaultState, action) => {
    switch(action.Types) {
        default:
            return state;
    }
}

export default reducer;