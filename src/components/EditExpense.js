import React from 'react'

const EditExpense = (props) => {
    console.log(props);
    
    return (
        <div>
            Editing Expense with id of {props.match.params.id}
        </div>
    );
}

export default EditExpense;
