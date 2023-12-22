import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

  const [value, setvalue] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault();

    if(value){
        addTodo(value);
        setvalue('');
    }

  };

  return (
    <form  className="TodoForm" onSubmit={submitHandler}>
    <input type="text" value={value} onChange={(e) => setvalue(e.target.value)} className="todo-input" placeholder='Add your task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>

  )
}

