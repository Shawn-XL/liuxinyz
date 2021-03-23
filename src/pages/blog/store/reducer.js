import { fromJS } from 'immutable';


const defaultState = fromJS({
    articles: [{
        id:1,
        title:"What is 2D Array(Matrix)?",
        content:"Matrix is a rectangular two-dimensional array of numbers arranged in rows and columns. A matrix with m rows and n columns can be called an m × n matrix. Individual entries in the matrix are called elements and can be represented by a[i,j] which suggests that the element a is present in the ith row and jth column."
    },
    {
        id:2,
        title:"Addition of two matrices",
        content:"Two matrices X and Y can be added if and only if they have the same dimensions that are, the same number of rows and columns. It is not possible to add a 2 × 3 matrix with a 3 × 2 matrix. The addition of two matrices can be performed by adding their corresponding elements as"
    },
    {
        id:3,
        title:"SOLID Principles In C#",
        content:"SOLID design principles in C# are basic design principles. SOLID stands for Single Responsibility Principle (SRP), Open closed Principle (OSP), Liskov substitution Principle (LSP), Interface Segregation Principle (ISP), and Dependency Inversion Principle (DIP). "
    }],
});

const reducer = (state = defaultState, action) => {
    switch(action.Types) {
        default:
            return state;
    }
}

export default reducer;