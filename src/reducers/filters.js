const filterDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = ( state=filterDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.payload
            };
        case 'SORT_BY_DATE': 
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.payload
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.payload
            };
        default:
            return state;
    }
};

export default filtersReducer;