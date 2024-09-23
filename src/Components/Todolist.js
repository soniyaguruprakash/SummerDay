import React, { useState } from 'react'

function Todolist() {

    const [task,setTask] = useState(["Reading Books", 'Meditation'])
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue == false){
            return alert('please enter your task')
        }
        else{
                
        setTask([...task, inputValue])
        setInputValue(' ')
        }
        
    }
    function handleDelete(id){
        const newlist = task.filter((list)=>list.id !== id)

        setTask(newlist)
        
    }
    


  return (

    <div className='container bg-warning w-100 h-100'>
        <h1>Todo - List</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={inputValue} className='form-control' placeholder='Add a new task' />
            <button className='btn bg-light' type='submit'>Add</button>
            <ul>
                {task.map((list)=>{
                    return( 
                    <tr key={list.i}>
                        <td><input type='checkbox' /></td>
                        <td>{list}</td>
                        <td><button onClick={()=>handleDelete(list.id)} className='btn btn-danger'>Delete</button></td>
                     </tr> 
                     // key is required for React to identify unique elements in the list, otherwise it will re-render the whole list each time a task is added or removed.
                )})}
            </ul>

        </form>

    </div>
  )
}

export default Todolist