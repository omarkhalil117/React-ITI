import React, { useState } from 'react';

function TodoList() {

    const [counter, setCounter] = useState(1);
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (title !== '') {
            const newTodo = {
                id: counter,
                text: title,
                done: false
            };

            setTodos([...todos, newTodo]);
            setTitle('');
            setCounter(prevCounter => prevCounter + 1);
            console.log(todos)
        }
    };
    
    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };
    
    const toggleDone = (id) => {
        const toUpdate = todos.find((el) => el.id === id)

        toUpdate.done = !toUpdate.done

        setTodos([...todos])
    };


    return (
        <div className='container mt-5'>
            <h2 className='fs-1'>Todos List</h2>
            <p className='text-success'>Todos Count : {todos.length}</p>

            <button className='btn btn-primary mx-2' onClick={addTodo}>Add Todo</button>

            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='input-group-sm'/>
                {todos.map(todo => (
                    <div key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                        <p>{todo.text}</p>
                        <button className='btn btn-success mx-1 ' onClick={() => toggleDone(todo.id)}>Done</button>
                        <button className='btn btn-danger mx-1' onClick={() => handleDelete(todo.id)}>Delete</button>
                    </div>
                ))}
        </div>
    );
}

export default TodoList;