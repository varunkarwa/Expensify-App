export default (expenses , {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const sdMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const edMatch = typeof endDate !=='number' || expense.createdAt <= endDate;
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