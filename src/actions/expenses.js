import {v4 as uuidv4} from 'uuid';

export const addExpense = ({
        description = '',
        createdAt = 0,
        note = '',
        amount = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    payload: {
        id : uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

export const removeExpense = ( id ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});