import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';0
import { DateRangePicker } from 'react-dates';
import { setStartDate, setEndDate } from '../actions/filters';

const ExpenseListFilters = ({filters, dispatch}) => { 
   const [calendarFocused,setCalendarFocused] = useState(null);
    return( 
    <div className="content-container">
        <div className="input-group">
            <div className="input-group__item">
                <input className="text-input" placeholder="Search Expenses" type='text' value={filters.text} onChange={(e) => {
                    dispatch(setTextFilter(e.target.value))
                }}/>
            </div>
            <div className="input-group__item">
                <select className="select" value={filters.sortBy} onChange={e => {
                    dispatch({type: e.target.value==='date' ? 'SORT_BY_DATE' : 'SORT_BY_AMOUNT'})
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
            </div>
            <div className="input-group__item">
                <DateRangePicker 
                    startDate = {filters.startDate}
                    endDate = {filters.endDate}
                    onDatesChange = {({startDate, endDate}) => {
                        dispatch(setStartDate(startDate));
                        dispatch(setEndDate(endDate));
                    }}
                    focusedInput = {calendarFocused}
                    onFocusChange = {(calendarFocused) => {setCalendarFocused(calendarFocused)}}
                    showClearDates={true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                />
            </div>
        </div>
    </div>
)};  

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
