import React, { useState,useEffect } from 'react'
import './TodoForm.css'
import TodoList from './TodoList'

function TodoForm() {

    const [inputitem,setInputItem]  = useState('')
    const [items,setItems] = useState([])


    const addTask = (e)=>{
        if(inputitem){
            const newitem = {id:new Date().getTime().toString(),title:inputitem}
            setItems([...items,newitem]);
            localStorage.setItem('items', JSON.stringify([...items,newitem]));
            setInputItem('')
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('items')){
            const items = localStorage.getItem('items');
            setItems(JSON.parse(items));

            
            
        }else{
            localStorage.setItem('items', JSON.stringify(items))
        }
    },[])
  return (
    <>
    <div className="container">
        <h3>TodoForm</h3>
        <form className="form-control" onSubmit = {addTask}>
            <input className='input-form' type="text" value={inputitem} onChange = {(e)=>setInputItem(e.target.value)} placeholder="Enter your data"/>
            <button className="form-btn" type='Submit'>+</button>
        </form>
        <div>
        <TodoList/>
        </div>
        

    </div>
    </>
  )
}

export default TodoForm