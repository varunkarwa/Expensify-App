import moment from 'moment';

export default (expenses , {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt);
        const sdMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const edMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return sdMatch && edMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1:-1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1;
        }
    });
};