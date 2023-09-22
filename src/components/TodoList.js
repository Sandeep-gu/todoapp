import React, { useState,useEffect } from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'
function TodoList() {
    const [todos,setTodos] = useState([]);
  useEffect(()=>{
    if(localStorage.getItem('items')){
        const items = localStorage.getItem('items');
        setTodos(JSON.parse(items));
    }
    
  },[]);
  return (
    <div className='container-list'>
        {
            
            <TodoItem item={todos}/>
            
        }
        
    </div>
  )
}

export default TodoList