export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    payload: text
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    payload: startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_START_DATE',
    payload: endDate
});