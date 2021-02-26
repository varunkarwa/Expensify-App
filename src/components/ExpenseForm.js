import React, {useState} from 'react';

const ExpenseForm = () => {
    const [description,setDescription] = useState();
    onDescChange = (e) => {
        setDescription(e.target.value);
    }
    return (
        <div>
            <form>
                <input type='text' placeholder='Description' autoFocus value={description} onChange={onDescChange}/>
                <input type='number' placeholder='Amount'/>
                <textarea placeholder='Add a note(optional)'></textarea>
                <button>Add Expense</button>    
            </form> 
        </div>
    )
}

export default ExpenseForm;
