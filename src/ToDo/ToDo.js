import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import '../common.css';

function ToDo(props){
    const [todos, setToDos] = useState([
        {text: 'Learn about React',
        isCompleted: false
        },
        {text: 'Build your To Do App using hooks',
        isCompleted: false
        },
        {text: 'React is a view library',
        isCompleted: false
        }
    ])

    const addToDo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setToDos(newTodos);
    };

    const completeToDo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setToDos(newTodos);
    };

    const deleteToDo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setToDos(newTodos);
    }

    return (
        <div>
            <ToDoForm addToDo={addToDo} />
            {todos.map((todo, index) => (
                <ToDoList 
                key={index}
                index={index}
                todo={todo.text}
                isComplete={todo.isCompleted}
                completeToDo={completeToDo}
                deleteToDo={deleteToDo} />
            ))}
        </div>
    );
}

export default ToDo;