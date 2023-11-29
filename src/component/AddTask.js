import React, {useState} from 'react';


export const AddTask = ({addTask}) => {
    const [value,setValue] = useState("");

    const additem = () =>{
        addTask(value);
        setValue("")
    };
  return (
    <>
        <div className='input-container'>
            
            <input type='text' className='input' placeholder='Add a new task' value = {value} onChange={(e)=>{setValue(e.target.value)}}/>
            <button onClick = {additem} className='add-btn'>ADD</button>
    
        </div>
    </>
  )
}


