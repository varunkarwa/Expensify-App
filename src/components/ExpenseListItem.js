import React from 'react';
import { connect } from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
    <div>
        <h3>{description}</h3>
        <p>ID: {id}</p>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense(id));
        }}>Remove Expense</button>
    </div>
);

const mapStateToProps = (state) => {
    return{
        expenses: state.expenses
    }
};

export default connect(mapStateToProps)(ExpenseListItem);
