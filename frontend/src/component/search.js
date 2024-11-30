import React, { useState } from 'react'
import { useContext } from 'react';
import GlobalItem from '../store/globalItem';

const Search = () => {
  const {addItem,setAddItem,task,setTask,edit,setEdit,id,email,idValue,setIdValue}=useContext(GlobalItem);


  const addTask=(e)=>{
e.preventDefault();
if(edit){
  const newList1=addItem.map((item)=>{
    if(item.id===id){
      updateData(id,task);
      return{
        id:id,
        value:task
      }
    }
    else{
     return item      
    }
})
setEdit(false);
setAddItem(newList1)
}
else{
  alert(idValue)
  addDataToDb();
  setIdValue((prev)=>prev+1)
}
  }




const updateData=async(id,task)=>{
  const add = await fetch("http://localhost:4000/api/updatetask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id:id,
      task:task,
      email:email
    }),
  });
}

const addDataToDb=async()=>{
  const add = await fetch("http://localhost:4000/api/addTask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id:idValue,
      value:task,
      email:email
    }),
  });
}


  return (
    <div>
      <form onSubmit={addTask}>
      <input type='text' placeholder='add here' name='item' value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button>add</button>
      </form>
    </div>
  )
}

export default Search
