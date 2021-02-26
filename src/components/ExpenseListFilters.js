import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';0

const ExpenseListFilters = ({filters, dispatch}) => (
    <div>
        <input type='text' value={filters.text} onChange={(e) => {
            dispatch(setTextFilter(e.target.value))
        }}/>
        <br /><select value={filters.sortBy} onChange={e => {
            dispatch({type: e.target.value==='date' ? 'SORT_BY_DATE' : 'SORT_BY_AMOUNT'})
        }}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
    </div>
);  

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
