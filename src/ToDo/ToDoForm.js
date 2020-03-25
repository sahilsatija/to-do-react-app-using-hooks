import React, { useState } from 'react';
import '../common.css';


function ToDoForm(props){
    const [value, setValue] = useState('');
    const addToDo = props.addToDo;
    
   const handleSubmit = e => {
        e.preventDefault();
        if (value) {
            addToDo(value);
            setValue('');   
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={value}
            className="input"
            size={35}
            placeholder="What needs to be done?"
            onChange={(e) => setValue(e.target.value)}/>
        </form>
    );
}

export default ToDoForm;