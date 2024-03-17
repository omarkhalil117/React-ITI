import React from 'react'
import './todo.css'
function Todo(props) {


    const handleClick = ()=>{
        console.log(props.id)
    }
    
  return (
    <div className='todo'>
        <p>{props.title}</p>
        <button className='btn btn-danger ' onClick={handleClick}> Delete</button>
    </div>
  )
}

export default Todo