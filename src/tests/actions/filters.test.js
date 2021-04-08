import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object',() => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        payload: moment(0)
    });
});

test('should generate set end date action object',() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        payload: moment(0)
    });
});

test('should generate set text filter action object with text value',() => {
    const text = 'Something';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        payload: text
    });
});

test('should generate set text filter action object with default value',() => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        payload:''
    });
});

test('should generate action object for sort by date',() => {
    expect(sortByDate()).toEqual({ type:'SORT_BY_DATE'});
});

test('should generate action object for sort by amount',() => {
    expect(sortByAmount()).toEqual({ type:'SORT_BY_AMOUNT'});
});