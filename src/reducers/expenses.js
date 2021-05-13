
const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return[
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id!=action.id);
        case 'EDIT_EXPENSE':
            return state.map(expense => action.id === expense.id ? action.updates : expense);
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};

export default expensesReducer;