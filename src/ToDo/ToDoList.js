import React from 'react';
import '../common.css';

function ToDoList(props) {
    const {todo, index, completeToDo,deleteToDo, isComplete} = props;
    console.log(props);
   return(
    <div>
       <div className={`todo ${isComplete ? `line-through`: ''}`} onClick={() => completeToDo(index)}>
        {todo}
       </div>
       <button onClick={() => deleteToDo(index)} style={{background: 'red', border: '1px solid red'}}>x</button>
    </div>

   );
}


export default ToDoList;